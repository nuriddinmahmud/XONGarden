import express from 'express';
import {
  createDrainage,
  getAllDrainages,
  getDrainageById,
  updateDrainage,
  deleteDrainage,
} from '../controllers/drenaj.controller.js';

const router = express.Router();

router.post('/', createDrainage);
router.get('/', getAllDrainages);
router.get('/:id', getDrainageById);
router.patch('/:id', updateDrainage);
router.delete('/:id', deleteDrainage);

export default router;
