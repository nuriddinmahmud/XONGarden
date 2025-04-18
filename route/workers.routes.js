import express from 'express';
import {
  createWorker,
  getAllWorkers,
  getWorkerById,
  updateWorker,
  deleteWorker,
} from '../controllers/workers.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Workers
 *   description: API for managing worker payroll records
 */

/**
 * @swagger
 * /api/workers:
 *   post:
 *     summary: Create a new worker payroll record
 *     tags: [Workers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - workerCount
 *               - salaryPerOne
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-26
 *               workerCount:
 *                 type: integer
 *                 example: 10
 *               salaryPerOne:
 *                 type: integer
 *                 example: 50000
 *               totalSalary:
 *                 type: integer
 *                 example: 500000
 *     responses:
 *       201:
 *         description: Worker payroll record created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post('/', createWorker);

/**
 * @swagger
 * /api/workers:
 *   get:
 *     summary: Get all worker payroll records
 *     tags: [Workers]
 *     responses:
 *       200:
 *         description: List of worker records
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllWorkers);

/**
 * @swagger
 * /api/workers/{id}:
 *   get:
 *     summary: Get a worker payroll record by ID
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Worker payroll ID
 *     responses:
 *       200:
 *         description: Worker record fetched successfully
 *       404:
 *         description: Worker record not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getWorkerById);

/**
 * @swagger
 * /api/workers/{id}:
 *   patch:
 *     summary: Update a worker payroll record
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Worker payroll ID
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
 *                 example: 2025-04-30
 *               workerCount:
 *                 type: integer
 *                 example: 12
 *               salaryPerOne:
 *                 type: integer
 *                 example: 60000
 *               totalSalary:
 *                 type: integer
 *                 example: 720000
 *     responses:
 *       200:
 *         description: Worker record updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Worker record not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:id', updateWorker);

/**
 * @swagger
 * /api/workers/{id}:
 *   delete:
 *     summary: Delete a worker payroll record
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Worker payroll ID
 *     responses:
 *       200:
 *         description: Worker record deleted successfully
 *       404:
 *         description: Worker record not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteWorker);

export default router;
