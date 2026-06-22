// // // src/models/User.ts

// // import { DataTypes, Model } from "sequelize";
// // import { sequelize } from "../config/db";

// // export class User extends Model {
// //   public id!: number;
// //   public name!: string;
// //   public email!: string;
// //   public password!: string;
// //   public role!: "customer" | "agent" | "admin";
// // }

// // User.init(
// //   {
// //     id: {
// //       type: DataTypes.INTEGER,
// //       autoIncrement: true,
// //       primaryKey: true,
// //     },
// //     name: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //     email: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //       unique: true,
// //     },
// //     password: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //     role: {
// //       type: DataTypes.ENUM("customer", "agent", "admin"),
// //       defaultValue: "customer",
// //     },
// //   },
// //   {
// //     sequelize,
// //     tableName: "users",
// //     timestamps: true,
// //   }
// // );

// import { DataTypes, Model, Optional } from "sequelize";
// import { sequelize } from "../config/db";

// type UserRole = "customer" | "agent" | "admin";

// interface UserAttributes {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   role: UserRole;
// }

// interface UserCreationAttributes extends Optional<UserAttributes, "id" | "role"> {}

// export class User extends Model<UserAttributes, UserCreationAttributes> {}

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: DataTypes.STRING,
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//     password: DataTypes.STRING,
//     role: {
//       type: DataTypes.ENUM("customer", "agent", "admin"),
//       defaultValue: "customer",
//     },
//   },
//   {
//     sequelize,
//     tableName: "users",
//     timestamps: true,
//   }
// );


import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

type UserRole = "customer" | "agent" | "admin";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
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
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);