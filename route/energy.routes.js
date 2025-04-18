import express from 'express';
import {
  createEnergy,
  getAllEnergies,
  getEnergyById,
  updateEnergy,
  deleteEnergy,
} from '../controllers/energy.controller.js';

const router = express.Router();

router.post('/', createEnergy);
router.get('/', getAllEnergies);
router.get('/:id', getEnergyById);
router.patch('/:id', updateEnergy);
router.delete('/:id', deleteEnergy);

export default router;
