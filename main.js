import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.get("/api", (req, res) => {
//   res.json({ success: true, message: "🚀 XON's Garden API is working!" });
// });

// app.use("*", (req, res) => {
//   res.status(404).json({ success: false, message: "Route not found" });
// });

async function connectDB() {
  try {
    await sequelize.sync({ force: true });
    console.log("Database connection has been established successfully.");

    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
}

connectDB();