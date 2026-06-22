// src/controllers/ticket.controller.ts

import { Request, Response } from "express";
import { Ticket } from "../models/Tickets";
import { AuthRequest } from "../middleware/auth.middleware";

export const createTicket = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { title, description, priority } = req.body;

    const ticket = await Ticket.create({
      title,
      description,
      priority,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Ticket created",
      ticket,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getTickets = async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const user = req.user;
  
      let tickets;
  
      // CUSTOMER → only own tickets
      if (user.role === "customer") {
        tickets = await Ticket.findAll({
          where: { createdBy: user.id },
        });
      }
  
      // AGENT → assigned tickets
      else if (user.role === "agent") {
        tickets = await Ticket.findAll({
          where: { assignedTo: user.id },
        });
      }
  
      // ADMIN → all tickets
      else {
        tickets = await Ticket.findAll();
      }
  
      res.json({
        success: true,
        tickets,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const updateTicketStatus = async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { status } = req.body;
  
      const ticket = await Ticket.findByPk(Number(req.params.id));
  
      if (!ticket) {
        return res.status(404).json({
          success: false,
          message: "Ticket not found",
        });
      }
  
      ticket.status = status;
      await ticket.save();
  
      res.json({
        success: true,
        message: "Status updated",
        ticket,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const assignTicket = async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { agentId } = req.body;
      console.log("assignTicket called, id:", req.params.id, "agentId:", agentId); // 👈
      const ticket = await Ticket.findByPk(Number(req.params.id));
      console.log("ticket found:", ticket?.toJSON()); // 
      if (!ticket) {
        return res.status(404).json({
          success: false,
          message: "Ticket not found",
        });
      }
  
      ticket.assignedTo = agentId;
      ticket.status = "in_progress";
  
      await ticket.save();
      console.log("after save:", ticket.toJSON()); // 👈
      res.json({
        success: true,
        message: "Ticket assigned",
        ticket,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };