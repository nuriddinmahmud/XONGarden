import express from 'express';
import {
  createDrainage,
  getAllDrainages,
  getDrainageById,
  updateDrainage,
  deleteDrainage,
} from '../controllers/drenaj.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Drainage
 *   description: API for managing drainage records
 */

/**
 * @swagger
 * /api/drenaj:
 *   post:
 *     summary: Create a new drainage record
 *     tags: [Drainage]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - hoursWorked
 *               - totalSalary
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-18
 *               hoursWorked:
 *                 type: integer
 *                 example: 8
 *               totalSalary:
 *                 type: integer
 *                 example: 120000
 *     responses:
 *       201:
 *         description: Drainage record created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post('/', createDrainage);

/**
 * @swagger
 * /api/drenaj:
 *   get:
 *     summary: Get all drainage records
 *     tags: [Drainage]
 *     responses:
 *       200:
 *         description: List of drainage records
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllDrainages);

/**
 * @swagger
 * /api/drenaj/{id}:
 *   get:
 *     summary: Get drainage record by ID
 *     tags: [Drainage]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Drainage ID
 *     responses:
 *       200:
 *         description: Drainage record fetched successfully
 *       404:
 *         description: Record not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getDrainageById);

/**
 * @swagger
 * /api/drenaj/{id}:
 *   patch:
 *     summary: Update drainage record
 *     tags: [Drainage]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Drainage ID
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
 *                 example: 2025-04-19
 *               hoursWorked:
 *                 type: integer
 *                 example: 10
 *               totalSalary:
 *                 type: integer
 *                 example: 150000
 *     responses:
 *       200:
 *         description: Record updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Record not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:id', updateDrainage);

/**
 * @swagger
 * /api/drenaj/{id}:
 *   delete:
 *     summary: Delete drainage record
 *     tags: [Drainage]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Drainage ID
 *     responses:
 *       200:
 *         description: Record deleted successfully
 *       404:
 *         description: Record not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteDrainage);

export default router;
