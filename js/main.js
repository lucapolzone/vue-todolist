const { createApp } = Vue

const app = createApp({
  data() {
    return {
      //array attività
      arrayTasks: [
        {
          text: "Attività n.1",
          done: false
        },
        {
          text: "Attività n.2",
          done: true
        },
        {
          text: "Attività n.3",
          done: false
        },
        {
          text: "Attività n.4",
          done: false
        }
      ],

      // array collegato al valore di input
      newTask: {
        text: '',
        done: false
      },

      //variabile switch se il campo input è vuoto
      emptyInput: false,
      emptyInputMessage: ""
    }
  },

  methods: {
    //funzione per cancellare una task
    deleteTask(index) {
      this.arrayTasks.splice(index, 1);
    },
    
    // funzione per salvare il valore di input e aggiungerlo alle task
    addTask() {
      //se l'input è vuoto
      if (!this.newTask.text) {
        this.emptyInputMessage = true;

        //error anche su index.html
        this.emptyInputMessage = "error"
        
      } else {
        if (this.newTask.text.trim()) {
          //core della funzione
          this.arrayTasks.push({ ...this.newTask });
          this.newTask.text = '';
        }
      }
        
    
    }
    






  }
});

app.mount('#app');