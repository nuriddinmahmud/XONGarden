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

const router = express.Router();

router.use("/fertilizers", fertilizerRoutes);
router.use("/transports", transportRoutes);
router.use("/remonts", remontRoutes);
router.use("/workers", workerRoutes);
router.use("/drenaj", drenajRoutes);
router.use("/energy", energyRoutes);
router.use("/foods", foodRoutes);
router.use("/users", userRoutes);
router.use("/taxes", taxRoutes);
router.use("/oils", oilRoutes);

export default router;
