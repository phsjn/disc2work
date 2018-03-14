Polymer ({
    is: 'disk2work-login2',
    properties: {
      email: {
        type: Object
      },
      password: {
        type: Object
      },
      error: {
        type: Object
      },
      firebaseUser: {
        type: Object
      }
    },

    submitForm: function (){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
        
        })
        .catch((error) => {
          const { code, message } = error;
        });

      }
  });