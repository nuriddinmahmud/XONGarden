import express from 'express';
import {
  createRemont,
  getAllRemonts,
  getRemontById,
  updateRemont,
  deleteRemont,
} from '../controllers/remont.controller.js';

const router = express.Router();

router.post('/', createRemont);
router.get('/', getAllRemonts);
router.get('/:id', getRemontById);
router.patch('/:id', updateRemont);
router.delete('/:id', deleteRemont);

export default router;
