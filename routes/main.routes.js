import express from "express";
import drainageRoutes from "./drainage.routes.js";
import energyRoutes from "./energy.routes.js";
import fertilizerRoutes from "./fertilizer.routes.js";
import foodRoutes from './food.routes.js';
import oilRoutes from './oil.routes.js';




const MainRouter = express.Router();

MainRouter.use("/drainage", drainageRoutes);
MainRouter.use("/energy", energyRoutes);
MainRouter.use("/fertilizer", fertilizerRoutes);
MainRouter.use('/food', foodRoutes);
MainRouter.use('/oil', oilRoutes);

export default MainRouter;
