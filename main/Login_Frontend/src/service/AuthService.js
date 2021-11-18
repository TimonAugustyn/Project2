<<<<<<< HEAD
module.exports = {
    getUser: function() {
      const user = sessionStorage.getItem('user');
      if (user === 'undefined' || !user) {
        return null;
      } else {
        return JSON.parse(user);
      }
    },
  
    getToken: function() {
      return sessionStorage.getItem('token');
    },
  
    setUserSession: function(user, token) {
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', token);
    },
  
    resetUserSession: function() {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
    }
=======
module.exports = {
    getUser: function() {
      const user = sessionStorage.getItem('user');
      if (user === 'undefined' || !user) {
        return null;
      } else {
        return JSON.parse(user);
      }
    },
  
    getToken: function() {
      return sessionStorage.getItem('token');
    },
  
    setUserSession: function(user, token) {
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', token);
    },
  
    resetUserSession: function() {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
    }
>>>>>>> 35cffa1ee2586e0525c2ff41fc98cc3bae63fdd4
  }