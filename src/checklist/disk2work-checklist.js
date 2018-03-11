Polymer({
    is: 'disk2work-checklist',
    properties: {
        tasks: {
            type: Array,
            value: () => []
      }
    },
    Adicionar: function () {
        const newTask = {
            name: '',
            completed : false

        }
        this.push('tasks', newTask);
    },
    isNotCompleted: function(task){
        return !task.completed;
    },
    isCompleted: function(task){
        return task.completed;
    }
  });