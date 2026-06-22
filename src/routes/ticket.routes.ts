// src/routes/ticket.routes.ts

import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";
import {
  createTicket,
  getTickets,
  updateTicketStatus,
  assignTicket,
} from "../controller/ticket.controller";

const router = Router();

router.post("/", authenticate, authorize("customer"), createTicket);

router.get("/", authenticate, getTickets);

router.patch(
  "/:id/status",
  authenticate,
  authorize("agent", "admin"),
  updateTicketStatus,
);

router.patch("/:id/assign", authenticate, authorize("admin"), assignTicket);

export default router;
