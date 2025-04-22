import express from 'express';
import {
  createFertilizer,
  getAllFertilizers,
  getFertilizerById,
  updateFertilizer,
  deleteFertilizer,
} from '../controllers/fertilizer.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Fertilizer
 *   description: API for managing fertilizer usage and records
 */

/**
 * @swagger
 * /api/fertilizers:
 *   post:
 *     summary: Create a new fertilizer record
 *     tags: [Fertilizer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - fertilizerType
 *               - tonAmount
 *               - comment
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-18
 *               fertilizerType:
 *                 type: string
 *                 enum: [mineral, local]
 *                 example: mineral
 *               machineCount:
 *                 type: integer
 *                 example: 3
 *               tonAmount:
 *                 type: integer
 *                 example: 5
 *               comment:
 *                 type: string
 *                 example: "Bahorgi urug'lanish uchun"
 *     responses:
 *       201:
 *         description: Fertilizer record created successfully
 *       400:
 *         description: Validation error
 *       400:
 *         description: Internal server error
 */
router.post('/', createFertilizer);

/**
 * @swagger
 * /api/fertilizers:
 *   get:
 *     summary: Get all fertilizer records
 *     tags: [Fertilizer]
 *     responses:
 *       200:
 *         description: List of all fertilizers
 *       400:
 *         description: Internal server error
 */
router.get('/', getAllFertilizers);

/**
 * @swagger
 * /api/fertilizers/{id}:
 *   get:
 *     summary: Get fertilizer record by ID
 *     tags: [Fertilizer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Fertilizer record ID
 *     responses:
 *       200:
 *         description: Fertilizer fetched successfully
 *       404:
 *         description: Fertilizer not found
 *       400:
 *         description: Internal server error
 */
router.get('/:id', getFertilizerById);

/**
 * @swagger
 * /api/fertilizers/{id}:
 *   patch:
 *     summary: Update a fertilizer record
 *     tags: [Fertilizer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Fertilizer record ID
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
 *               fertilizerType:
 *                 type: string
 *                 enum: [mineral, local]
 *                 example: local
 *               machineCount:
 *                 type: integer
 *                 example: 2
 *               tonAmount:
 *                 type: integer
 *                 example: 7
 *               comment:
 *                 type: string
 *                 example: "Tuproqqa moslash"
 *     responses:
 *       200:
 *         description: Fertilizer updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Fertilizer not found
 *       400:
 *         description: Internal server error
 */
router.patch('/:id', updateFertilizer);

/**
 * @swagger
 * /api/fertilizers/{id}:
 *   delete:
 *     summary: Delete a fertilizer record
 *     tags: [Fertilizer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Fertilizer record ID
 *     responses:
 *       200:
 *         description: Fertilizer deleted successfully
 *       404:
 *         description: Fertilizer not found
 *       400:
 *         description: Internal server error
 */
router.delete('/:id', deleteFertilizer);

export default router;
