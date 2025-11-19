import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

const NODE_ENV = process.env.NODE_ENV ?? "development";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Request logging in development
  if (NODE_ENV === "development") {
    app.use((req, _res, next) => {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
      next();
    });
  }

  // API routes only
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });
  app.get("/api/ping", (_req, res) => {
    const message = process.env.PING_MESSAGE ?? "pong";
    res.json({ message });
  });
  app.get("/api/demo", handleDemo);

  // 404 handler for API routes only
  app.use(/^\/api(\/|$)/, (_req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  // Error handler for API routes only
  app.use(/^\/api(\/|$)/, (err: Error, _req: express.Request, res: express.Response) => {
    console.error(`[ERROR] ${err.message}`);
    res.status(500).json({ error: "Internal server error" });
  });

  return app;
}
