import express from 'express';
import drainageRoutes from './drainage.routes.js';

const MainRouter = express.Router();


MainRouter.use('/drainages', drainageRoutes);

export default MainRouter;
