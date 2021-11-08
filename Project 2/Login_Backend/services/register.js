const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-2'
})
const util = require('../utils/util');
const bcrypt = require('bcryptjs');
const authorize = require('../utils/authorize');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'TimonWeb';

async function register(userInfo) {
    const name = userInfo.name;
    const email = userInfo.email;
    const username = userInfo.username;
    const password = userInfo.password;
    if (!username || !name || !email || !password){
        return util.buildResponse(401, {
            message: 'All fields are required'
        }) 
    }

    const dynamoUser = await getUser(username);
    if (dynamoUser && dynamoUser.username){
        return util.buildResponse(401, {
            message: 'Username is already taken. Please select a new username.'
        })
    }

    const encryptedPW = bcrypt.hashSync(password.trim(), 10);
    const user = {
        name: name,
        email: email,
        username: username.toLowerCase().trim(),
        password: encryptedPW
    }

    const saveResponse = await saveUser(user);
    if(!saveResponse){
        return util.buildResponse(503, {message: 'Server Error. Try again later.'})
    }

    return util.buildResponse(200, {username: username});
}

async function getUser(username){
    const params = {
        TableName: userTable,
        Key: {
            username: username
        }
    }

    return await dynamodb.get(params).promise().then(Response => {
        return Response.Item;
    }, error => { 
        console.error('Error:   ', error);
    })
}

async function saveUser(user){
    const params = {
        TableName: userTable,
        Item: user
    }
    return await dynamodb.put(params).promise().then(() => {
        return true;
    }, error => { 
        console.error('Error:   ', error);
    })
}

module.exports.register = register;