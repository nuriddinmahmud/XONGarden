import express from 'express';
import {
  createFood,
  getAllFoods,
  getFoodById,
  updateFood,
  deleteFood,
} from '../controllers/food.controller.js';

const router = express.Router();

router.post('/', createFood);
router.get('/', getAllFoods);
router.get('/:id', getFoodById);
router.patch('/:id', updateFood); // PATCH, not PUT
router.delete('/:id', deleteFood);

export default router;
