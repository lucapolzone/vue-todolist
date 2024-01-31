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

    }
  },

  methods: {
    //funzione per cancellare una task
    deleteTask(index) {
      this.arrayTasks.splice(index, 1);
    },
    
    // funzione per salvare il valore di input e aggiungerlo alle task
    addTask() {
      //core della funzione
      if (this.newTask.text.trim()) {
          this.arrayTasks.push({ ...this.newTask });
          this.newTask.text = '';
      }
    }
  
  }
});

app.mount('#app');