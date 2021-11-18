<<<<<<< HEAD
const util = require('../utils/util');
const authorize = require('../utils/authorize');

function verify(requestBody) {
  if (!requestBody.user || !requestBody.user.username || !requestBody.token) {
    return util.buildResponse(401, { 
      verified: false,
      message: 'incorrect request body'
    })
  }

  const user = requestBody.user;
  const token = requestBody.token;
  const verification = auth.verifyToken(user.username, token);
  if (!verification.verified) {
    return util.buildResponse(401, verification);
  }

  return util.buildResponse(200, {
    verified: true,
    message: 'success',
    user: user,
    token: token
  })
}

=======
const util = require('../utils/util');
const authorize = require('../utils/authorize');

function verify(requestBody) {
  if (!requestBody.user || !requestBody.user.username || !requestBody.token) {
    return util.buildResponse(401, { 
      verified: false,
      message: 'incorrect request body'
    })
  }

  const user = requestBody.user;
  const token = requestBody.token;
  const verification = auth.verifyToken(user.username, token);
  if (!verification.verified) {
    return util.buildResponse(401, verification);
  }

  return util.buildResponse(200, {
    verified: true,
    message: 'success',
    user: user,
    token: token
  })
}

>>>>>>> 35cffa1ee2586e0525c2ff41fc98cc3bae63fdd4
module.exports.verify = verify;