<<<<<<< HEAD
const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-2'
})
const util = require('../utils/util');
const bcrypt = require('bcryptjs');
const authorize = require('../utils/authorize');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'TimonWeb';

async function login(user) {
  const username = user.username;
  const password = user.password;
  if (!user || !username || !password) {
    return util.buildResponse(401, {
      message: 'Both a username and a password is required'
    })
  }

  const dynamoUser = await getUser(username.toLowerCase().trim());
  if (!dynamoUser || !dynamoUser.username) {
    return util.buildResponse(403, { message: 'This user does not exist'});
  }

  if (!bcrypt.compareSync(password, dynamoUser.password)) {
    return util.buildResponse(403, { message: 'The password is incorrect'});
  }

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
    console.error('There is an error getting user: ', error);
  })
}

=======
const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-2'
})
const util = require('../utils/util');
const bcrypt = require('bcryptjs');
const authorize = require('../utils/authorize');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'TimonWeb';

async function login(user) {
  const username = user.username;
  const password = user.password;
  if (!user || !username || !password) {
    return util.buildResponse(401, {
      message: 'Both a username and a password is required'
    })
  }

  const dynamoUser = await getUser(username.toLowerCase().trim());
  if (!dynamoUser || !dynamoUser.username) {
    return util.buildResponse(403, { message: 'This user does not exist'});
  }

  if (!bcrypt.compareSync(password, dynamoUser.password)) {
    return util.buildResponse(403, { message: 'The password is incorrect'});
  }

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
    console.error('There is an error getting user: ', error);
  })
}

>>>>>>> 35cffa1ee2586e0525c2ff41fc98cc3bae63fdd4
module.exports.login = login;