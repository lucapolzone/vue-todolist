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
    }
  },

  methods: {
    //funzione per cancellare una task
    deleteTask(index) {
      this.arrayTasks.splice(index, 1);
    },

  }
});

app.mount('#app');