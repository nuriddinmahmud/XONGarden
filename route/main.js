import express from "express";
import fertilizerRoutes from "./fertilizer.routes.js";
import transportRoutes from "./transport.routes.js";
import workerRoutes from "./workers.routes.js";
import drenajRoutes from "./drenaj.routes.js";
import remontRoutes from "./remont.routes.js";
import energyRoutes from "./energy.routes.js";
import foodRoutes from "./foods.routes.js";
import userRoutes from "./user.routes.js";
import oilRoutes from "./oil.routes.js";
import taxRoutes from "./tax.routes.js";

const Mainrouter = express.Router();

Mainrouter.use("/fertilizers", fertilizerRoutes);
Mainrouter.use("/transports", transportRoutes);
Mainrouter.use("/remonts", remontRoutes);
Mainrouter.use("/workers", workerRoutes);
Mainrouter.use("/drenaj", drenajRoutes);
Mainrouter.use("/energy", energyRoutes);
Mainrouter.use("/foods", foodRoutes);
Mainrouter.use("/users", userRoutes);
Mainrouter.use("/taxes", taxRoutes);
Mainrouter.use("/oils", oilRoutes);

export default Mainrouter;
