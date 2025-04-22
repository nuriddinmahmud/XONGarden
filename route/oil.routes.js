import express from 'express';
import {
  createOil,
  getAllOils,
  getOilById,
  updateOil,
  deleteOil,
} from '../controllers/oil.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Oil
 *   description: API for managing oil expenses
 */

/**
 * @swagger
 * /api/oil:
 *   post:
 *     summary: Create a new oil record
 *     tags: [Oil]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - price
 *               - comment
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-18
 *               price:
 *                 type: integer
 *                 example: 80000
 *               comment:
 *                 type: string
 *                 example: "Texnika uchun moy"
 *     responses:
 *       201:
 *         description: Oil record created successfully
 *       400:
 *         description: Validation error
 *       400:
 *         description: Internal server error
 */
router.post('/', createOil);

/**
 * @swagger
 * /api/oil:
 *   get:
 *     summary: Get all oil records
 *     tags: [Oil]
 *     responses:
 *       200:
 *         description: List of oil records
 *       400:
 *         description: Internal server error
 */
router.get('/', getAllOils);

/**
 * @swagger
 * /api/oil/{id}:
 *   get:
 *     summary: Get an oil record by ID
 *     tags: [Oil]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Oil record ID
 *     responses:
 *       200:
 *         description: Oil record fetched successfully
 *       404:
 *         description: Oil record not found
 *       400:
 *         description: Internal server error
 */
router.get('/:id', getOilById);

/**
 * @swagger
 * /api/oil/{id}:
 *   patch:
 *     summary: Update an oil record
 *     tags: [Oil]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Oil record ID
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
 *               price:
 *                 type: integer
 *                 example: 90000
 *               comment:
 *                 type: string
 *                 example: "Yangi partiya"
 *     responses:
 *       200:
 *         description: Oil record updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Oil record not found
 *       400:
 *         description: Internal server error
 */
router.patch('/:id', updateOil);

/**
 * @swagger
 * /api/oil/{id}:
 *   delete:
 *     summary: Delete an oil record
 *     tags: [Oil]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Oil record ID
 *     responses:
 *       200:
 *         description: Oil record deleted successfully
 *       404:
 *         description: Oil record not found
 *       400:
 *         description: Internal server error
 */
router.delete('/:id', deleteOil);

export default router;
