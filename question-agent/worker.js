const { Worker } = require("bullmq");
const fs = require("fs");
const path = require("path");

// Load questions from JSON
const questionsPath = path.join(__dirname, "questions.json");
const questions = JSON.parse(fs.readFileSync(questionsPath, "utf8"));

const connection = {
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null
};

// Worker
const worker = new Worker(
  "questionQueue",
  async (job) => {
    console.log("Processing job:", job.data);

    const difficulty = job.data.difficulty || "easy";

    const bank = questions[difficulty];
    if (!bank || bank.length === 0) {
      return { error: `No questions found for difficulty: ${difficulty}` };
    }

    const randomIndex = Math.floor(Math.random() * bank.length);
    const question = bank[randomIndex];

   // console.log("Generated Question:", question);
    return question;
  },
  { connection }
);
console.log("Worker connected to Redis");

worker.on("completed", (job, returnvalue) => {
  console.log(`Job ${job.id} completed!`);
  console.log("Question:", returnvalue);
});
console.log("Worker is running… waiting for jobs");
