import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import prisma from "./config/database.js";
import drenajRoutes from "./route/drenaj.routes.js";
import energyRoutes from "./route/energy.routes.js";
import fertilizerRoutes from "./route/fertilizer.routes.js";
import foodRoutes from "./route/foods.routes.js";
import oilRoutes from "./route/oil.routes.js";
import remontRoutes from "./route/remont.routes.js";
import taxRoutes from "./route/tax.routes.js";
import transportRoutes from "./route/transport.routes.js";
import workerRoutes from "./route/workers.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/test", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.use("/api/drenaj", drenajRoutes);
app.use("/api/energy", energyRoutes);
app.use("/api/fertilizers", fertilizerRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/oils", oilRoutes);
app.use("/api/remonts", remontRoutes);
app.use("/api/taxes", taxRoutes);
app.use("/api/transports", transportRoutes);
app.use("/api/workers", workerRoutes);

app.get("/api", (req, res) => {
  res.json({ success: true, message: "🚀 XON's Garden API is working!" });
});

app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
