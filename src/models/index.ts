// src/models/index.ts

import { User } from "./User";
import { Ticket } from "./Tickets";

// Creator Relationship
User.hasMany(Ticket, {
  foreignKey: "createdBy",
  as: "createdTickets",
});

Ticket.belongsTo(User, {
  foreignKey: "createdBy",
  as: "creator",
});

// Assignee Relationship
User.hasMany(Ticket, {
  foreignKey: "assignedTo",
  as: "assignedTickets",
});

Ticket.belongsTo(User, {
  foreignKey: "assignedTo",
  as: "assignee",
});

export { User, Ticket };