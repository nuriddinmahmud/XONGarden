import express from 'express';
import {
  createDrainage,
  getAllDrainages,
  getDrainageById,
  updateDrainage,
  deleteDrainage,
} from '../controllers/drainage.controller.js';

const DrainageRouter = express.Router();

DrainageRouter.post('/', createDrainage);
DrainageRouter.get('/', getAllDrainages);
DrainageRouter.get('/:id', getDrainageById);
DrainageRouter.patch('/:id', updateDrainage);
DrainageRouter.delete('/:id', deleteDrainage);

export default DrainageRouter;
