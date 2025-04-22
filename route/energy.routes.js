import express from 'express';
import {
  createEnergy,
  getAllEnergies,
  getEnergyById,
  updateEnergy,
  deleteEnergy,
} from '../controllers/energy.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Energy
 *   description: API for managing energy payments
 */

/**
 * @swagger
 * /api/energy:
 *   post:
 *     summary: Create a new energy payment record
 *     tags: [Energy]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - amountPaid
 *               - comment
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-18
 *               amountPaid:
 *                 type: integer
 *                 example: 200000
 *               comment:
 *                 type: string
 *                 example: Elektr energiyasi uchun to‘lov
 *     responses:
 *       201:
 *         description: Record created successfully
 *       400:
 *         description: Validation error
 *       400:
 *         description: Internal server error
 */
router.post('/', createEnergy);

/**
 * @swagger
 * /api/energy:
 *   get:
 *     summary: Get all energy payment records
 *     tags: [Energy]
 *     responses:
 *       200:
 *         description: List of energy payments
 *       400:
 *         description: Internal server error
 */
router.get('/', getAllEnergies);

/**
 * @swagger
 * /api/energy/{id}:
 *   get:
 *     summary: Get a specific energy payment by ID
 *     tags: [Energy]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Energy payment ID
 *     responses:
 *       200:
 *         description: Energy payment fetched successfully
 *       404:
 *         description: Record not found
 *       400:
 *         description: Internal server error
 */
router.get('/:id', getEnergyById);

/**
 * @swagger
 * /api/energy/{id}:
 *   patch:
 *     summary: Update an energy payment
 *     tags: [Energy]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Energy payment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-20
 *               amountPaid:
 *                 type: integer
 *                 example: 180000
 *               comment:
 *                 type: string
 *                 example: Mart oyi to‘lovi
 *     responses:
 *       200:
 *         description: Record updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Record not found
 *       400:
 *         description: Internal server error
 */
router.patch('/:id', updateEnergy);

/**
 * @swagger
 * /api/energy/{id}:
 *   delete:
 *     summary: Delete an energy payment record
 *     tags: [Energy]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Energy payment ID
 *     responses:
 *       200:
 *         description: Record deleted successfully
 *       404:
 *         description: Record not found
 *       400:
 *         description: Internal server error
 */
router.delete('/:id', deleteEnergy);

export default router;
