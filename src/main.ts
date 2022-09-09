import bodyParser from "body-parser";
import cluster from "cluster";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";
import os from "os";
import { connection } from "./infra/database/Connection";
import routes from "./middlewares/Routes";

const PORT = process.env.PORT || 3000;
const limiter = rateLimit({
  windowMs: 1200000, // 20min
  max: 150,
});

const slower = slowDown({
  windowMs: 900000, //15min
  delayAfter: 100,
  delayMs: 100,
});

if (cluster.isPrimary) {
  const cpus = os.cpus().length;
  console.log(`Número de CPUs ==> ${cpus}`);
  console.log(`Master ${process.pid} está rodando ...`);
  for (let i = 0; i < 4; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} morreu ...`);
    console.log("Criar nova worker");
    cluster.fork();
  });
} else {
  console.log("Worker Thread está rodando, Número:", process.pid);
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use(routes);
  app.use(limiter, slower);
  app.listen(PORT, () => {
    console.log("🚀 Server ready...");
  });
}

function gracefulShutdown(code: any) {
  return (event: any) => {
    console.info(`${event} SIGNAL RECEIVED.`);
    console.log("CLOSING SERVER ...");
    connection.$disconnect().then(() => {
      console.log("HTTP SERVER IS CLOSED.");
      console.log("CLOSING PRISMA (DB, CLIENT) CONNECTION ...");
      console.log("PRISMA CONNECTION IS CLOSED.");
      process.exit(0);
    });
  };
}

process.on("SIGINT", gracefulShutdown("SIGINT"));
process.on("SIGTERM", gracefulShutdown("SIGTERM"));
process.on("exit", (code) => {
  console.info("EXIT SIGNAL RECEIVED !", code);
});
process.on("uncaughtException", (error, origin) => {
  console.info(`\nUNCAUGHT EXCEPTION RECEIVED!`, error);
});
process.on("unhandledRejection", (error, origin) => {
  console.info(`\nPROMISE REJECTION SIGNAL RECEIVED !`, error);
});
