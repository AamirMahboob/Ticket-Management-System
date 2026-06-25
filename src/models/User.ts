
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

type UserRole = "customer" | "agent" | "admin";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "role"> {}

export class User extends Model<
  UserAttributes,
  UserCreationAttributes
> {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare role: UserRole;
  declare isActive: boolean;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM("customer", "agent", "admin"),
      defaultValue: "customer",
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);