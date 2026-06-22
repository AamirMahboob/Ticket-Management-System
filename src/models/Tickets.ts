// // src/models/Ticket.ts

// import { DataTypes, Model } from "sequelize";
// import { sequelize } from "../config/db";

// export class Ticket extends Model {
//   public id!: number;
//   public title!: string;
//   public description!: string;
//   public status!: "open" | "in_progress" | "closed";
//   public priority!: "low" | "medium" | "high";

//   public createdBy!: number;
//   public assignedTo!: number | null;
// }

// Ticket.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },

//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },

//     status: {
//       type: DataTypes.ENUM("open", "in_progress", "closed"),
//       defaultValue: "open",
//     },

//     priority: {
//       type: DataTypes.ENUM("low", "medium", "high"),
//       defaultValue: "medium",
//     },

//     createdBy: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       field: "createdBy",
//     },

//     assignedTo: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       field: "assignedTo",
//     },
//   },
//   {
//     sequelize,
//     tableName: "tickets",
//     timestamps: true,
//     underscored: false,   // 👈 prevent camelCase → snake_case conversion
//   }
// );
 
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

export class Ticket extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare status: "open" | "in_progress" | "closed";
  declare priority: "low" | "medium" | "high";
  declare createdBy: number;
  declare assignedTo: number | null;
}

Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("open", "in_progress", "closed"),
      defaultValue: "open",
    },
    priority: {
      type: DataTypes.ENUM("low", "medium", "high"),
      defaultValue: "medium",
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assignedTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "tickets",
    timestamps: true,
    underscored: false,
  }
);