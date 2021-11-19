const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-2'
})
/////////////////////////////////////
const util = require('../utils/util');
const bcrypt = require('bcryptjs');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'TimonWeb';
/////////////////////////////////////
async function register(userInfo) {
    const name = userInfo.name;
    const email = userInfo.email;
    const username = userInfo.username;
    const password = userInfo.password;
    const saveResponse = await saveUser(user);
    const encryptedPW = bcrypt.hashSync(password.trim(), 10);
    const dynamoUser = await getUser(username);
    if (!username || !name || !email || !password){//if there is a textbox left open
        return util.buildResponse(401, {
            message: 'Please enter a valid input for each box!'
        }) 
    }
    if (dynamoUser && dynamoUser.username){//if there exists a user with that name already
        return util.buildResponse(401, {
            message: 'Username is already taken. Please select a new username.'
        })
    }
    const user = {
        name: name,
        email: email,
        username: username.toLowerCase().trim(),
        password: encryptedPW
    }
    if(!saveResponse){
        return util.buildResponse(503, {message: 'There was an error on the server side. Try again at a later time.'})
    }
    return util.buildResponse(200, {username: username});
}
/////////////////////////////////////
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
        console.error('An error has occured when retrieving the user:   ', error);
    })
}
/////////////////////////////////////
//register the username in the db
async function saveUser(user){
    const params = {
        TableName: userTable,
        Item: user
    }
    return await dynamodb.put(params).promise().then(() => {
        return true;
    }, error => { 
        console.error('An error has occured when saving the user:   ', error);
    })
}

module.exports.register = register;