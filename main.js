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

// Swagger imports
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Xon Garden REST API",
      version: "1.0.0",
      description: "Drainage and other resource management API",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./route/*.js"], // Route fayllar yo‘li
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API status test
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working ✅" });
});

async function connectDB() {
  try {
    await sequelize.sync();
    console.log("✅ All tables synced successfully.");

    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}\n📘 Swagger UI: http://localhost:${PORT}/api-docs`)
    );
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
}

connectDB();
