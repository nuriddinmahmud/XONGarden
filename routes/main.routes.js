import express from "express";
import drainageRoutes from "./drainage.routes.js";
import energyRoutes from "./energy.routes.js";
import fertilizerRoutes from "./fertilizer.routes.js";
import foodRoutes from './food.routes.js';
import oilRoutes from './oil.routes.js';
import remontRoutes from './remont.routes.js';
import taxRoutes from './tax.routes.js';
import transportRoutes from './transport.routes.js';
import workerRoutes from './worker.routes.js';


const MainRouter = express.Router();

MainRouter.use("/drainage", drainageRoutes);
MainRouter.use("/energy", energyRoutes);
MainRouter.use("/fertilizer", fertilizerRoutes);
MainRouter.use('/food', foodRoutes);
MainRouter.use('/oil', oilRoutes);
MainRouter.use('/remont', remontRoutes);
MainRouter.use('/tax', taxRoutes);
MainRouter.use('/transport', transportRoutes);
MainRouter.use('/worker', workerRoutes);


export default MainRouter;
