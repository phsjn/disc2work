Polymer({
    is: 'disk2work-notes',
    properties: {
      notes: {
        type: Object
      }
    },
    Adicionar: function () {
      this.$.query.ref.push({
          content: this.$.input.value
      });
      this.$.input.value = null;
    },
    Remover: function(e){
        var key = e.currentTarget.note.$key;
        this.$.query.ref.child(key).remove();
    }
  });