Polymer({
    is: 'disk2work-login',
    properties: {
      user: {
        type: Object
      },
      statusKnow: {
        type: Object
      }
    },
  
    login: function () {
      return this.$.auth.signInWithPopup();
    },
    logout: function () {
      return this.$.auth.signOut();
    }
  
  });