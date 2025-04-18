import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database.js";

import "./models/drenaj.model.js";
import "./models/energy.model.js";
import "./models/fertilizer.model.js";
import "./models/foods.model.js";
import "./models/oil.model.js";
import "./models/remont.model.js";
import "./models/tax.model.js";
import "./models/transport.model.js";
import "./models/user.model.js";
import "./models/workers.model.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function connectDB() {
  try {
    await sequelize.sync();
    console.log("✅ All tables synced successfully.");

    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
}

connectDB();
