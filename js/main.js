const { createApp } = Vue

const app = createApp({
  data() {
    return {
      //array attività
      tasksArray: [
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
  }
});

app.mount('#app');