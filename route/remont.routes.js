import express from 'express';
import {
  createRemont,
  getAllRemonts,
  getRemontById,
  updateRemont,
  deleteRemont,
} from '../controllers/remont.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Remont
 *   description: API for managing repair/maintenance expenses
 */

/**
 * @swagger
 * /api/remont:
 *   post:
 *     summary: Create a new remont (repair) record
 *     tags: [Remont]
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
 *                 example: 300000
 *               comment:
 *                 type: string
 *                 example: "Traktor ta'miri"
 *     responses:
 *       201:
 *         description: Remont record created successfully
 *       400:
 *         description: Validation error
 *       400:
 *         description: Internal server error
 */
router.post('/', createRemont);

/**
 * @swagger
 * /api/remont:
 *   get:
 *     summary: Get all remont records
 *     tags: [Remont]
 *     responses:
 *       200:
 *         description: List of all remont records
 *       400:
 *         description: Internal server error
 */
router.get('/', getAllRemonts);

/**
 * @swagger
 * /api/remont/{id}:
 *   get:
 *     summary: Get a remont record by ID
 *     tags: [Remont]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Remont record ID
 *     responses:
 *       200:
 *         description: Remont record fetched successfully
 *       404:
 *         description: Remont record not found
 *       400:
 *         description: Internal server error
 */
router.get('/:id', getRemontById);

/**
 * @swagger
 * /api/remont/{id}:
 *   patch:
 *     summary: Update a remont record
 *     tags: [Remont]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Remont record ID
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
 *                 example: 2025-04-22
 *               price:
 *                 type: integer
 *                 example: 400000
 *               comment:
 *                 type: string
 *                 example: "Yangi qismlar o‘rnatildi"
 *     responses:
 *       200:
 *         description: Remont record updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Remont record not found
 *       400:
 *         description: Internal server error
 */
router.patch('/:id', updateRemont);

/**
 * @swagger
 * /api/remont/{id}:
 *   delete:
 *     summary: Delete a remont record
 *     tags: [Remont]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Remont record ID
 *     responses:
 *       200:
 *         description: Remont record deleted successfully
 *       404:
 *         description: Remont record not found
 *       400:
 *         description: Internal server error
 */
router.delete('/:id', deleteRemont);

export default router;
