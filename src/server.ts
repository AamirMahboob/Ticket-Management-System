import dotenv from "dotenv";

dotenv.config();
import app from "./app";
import { sequelize } from "./config/db";


const PORT = process.env.PORT || 5001;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully");

    await sequelize.sync(); // creates tables automatically (for now)

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ DB connection error:", error);
  }
}

startServer();
