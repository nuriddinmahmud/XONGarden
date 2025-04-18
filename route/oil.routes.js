import express from 'express';
import {
  createOil,
  getAllOils,
  getOilById,
  updateOil,
  deleteOil,
} from '../controllers/oil.controller.js';

const router = express.Router();

router.post('/', createOil);
router.get('/', getAllOils);
router.get('/:id', getOilById);
router.patch('/:id', updateOil);
router.delete('/:id', deleteOil);

export default router;
