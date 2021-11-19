module.exports = {
    getUser: function() {
      const user = sessionStorage.getItem('user');
      if (user === 'undefined' || !user) {
        return null;
      } else {
        return JSON.parse(user);
      }
    },
  /////////////////////////////////////
    getToken: function() {
      return sessionStorage.getItem('token');
    },
    setSession: function(user, token) {
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', token);
    },
    resetSession: function() {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
    }
  }