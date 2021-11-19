const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-2'
})
/////////////////////////////////////
const util = require('../utils/util');
const bcrypt = require('bcryptjs');
const authorize = require('../utils/authorize');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'TimonWeb';
/////////////////////////////////////
async function login(user) {
  const username = user.username;
  const password = user.password;
  const dynamoUser = await getUser(username.toLowerCase().trim());
  if (!user || !username || !password) {//if the user does not input both the username and password
    return util.buildResponse(401, {
      message: 'Both a username and a password is required!'
    })
  }
  //check the username and password:
  //checks the username
  if (!dynamoUser || !dynamoUser.username) {//if the user does not match with anyone in the db
    return util.buildResponse(403, { message: 'This user does not exist!'});
  }
  //checks the password
  if (!bcrypt.compareSync(password, dynamoUser.password)) {
    return util.buildResponse(403, { message: 'The password is incorrect!'});
  }
/////////////////////////////////////
  const userInfo = {
    username: dynamoUser.username,
    name: dynamoUser.name
  }
  const token = authorize.generateToken(userInfo)
  const response = {
    user: userInfo,
    token: token
  }
  return util.buildResponse(200, response);
}
/////////////////////////////////////
async function getUser(username) {
  const params = {
    TableName: userTable,
    Key: {
      username: username
    }
  }
  return await dynamodb.get(params).promise().then(response => {
    return response.Item;
  }, error => {
    console.error('There has been an error getting the user!', error);
  })
}

module.exports.login = login;