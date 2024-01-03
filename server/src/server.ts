// Import packages
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";

// Import utilities
import logger from "./utilities/logger";

// Load environment variables
dotenv.config();
const port = process.env.PORT || 3000;

// Initialize Express server
const server = express();

//Set stream for logger
const stream = {
  write: (message: string) => logger.http(message),
};

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(compression());
server.use(cors());
server.use(
  morgan(
    ":remote-addr :method :url :status :res[content-length] - :response-time ms",
    {
      stream,
      skip: () => false,
    }
  )
);

// Routes
server.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

//Start server listening on port
server.listen(port, () => {
  logger.info(`Server successfully started up on port ${port}.`);
});
