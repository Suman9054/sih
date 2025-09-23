// queue.js
const { Queue } = require("bullmq");
const connection = { host: "127.0.0.1", port: 6379, maxRetriesPerRequest: null };

const queue = new Queue("questionQueue", { connection });

// Add example jobs
queue.add("quizJob", { difficulty: "easy" });
//queue.add("quizJob", { difficulty: "medium" });
//queue.add("quizJob", { difficulty: "hard" });

console.log("Jobs added to the queue");
