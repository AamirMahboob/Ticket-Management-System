 
// import { Sequelize } from "sequelize";

import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize(
//   process.env.DB_NAME as string,
//   process.env.DB_USER as string,
//   process.env.DB_PASSWORD as string,
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//     port: Number(process.env.DB_PORT),
//     logging: false,
//   },
// );

export const sequelize = new Sequelize(process.env.DB_URL!, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});