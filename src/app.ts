// src/app.ts

import express from "express";
import authRoutes from "./routes/auth.route";
import ticketRoutes from "./routes/ticket.routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/test", (req, res) => res.json({ ok: true }));
app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);

export default app;
