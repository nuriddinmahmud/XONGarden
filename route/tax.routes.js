import express from 'express';
import {
  createTax,
  getAllTaxes,
  getTaxById,
  updateTax,
  deleteTax,
} from '../controllers/tax.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tax
 *   description: API for managing tax payments
 */

/**
 * @swagger
 * /api/tax:
 *   post:
 *     summary: Create a new tax record
 *     tags: [Tax]
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
 *                 example: 2025-04-25
 *               amountPaid:
 *                 type: integer
 *                 example: 150000
 *               comment:
 *                 type: string
 *                 example: "Yer solig'i"
 *     responses:
 *       201:
 *         description: Tax record created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post('/', createTax);

/**
 * @swagger
 * /api/tax:
 *   get:
 *     summary: Get all tax records
 *     tags: [Tax]
 *     responses:
 *       200:
 *         description: List of tax records
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllTaxes);

/**
 * @swagger
 * /api/tax/{id}:
 *   get:
 *     summary: Get a tax record by ID
 *     tags: [Tax]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Tax record ID
 *     responses:
 *       200:
 *         description: Tax record fetched successfully
 *       404:
 *         description: Tax record not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getTaxById);

/**
 * @swagger
 * /api/tax/{id}:
 *   patch:
 *     summary: Update a tax record
 *     tags: [Tax]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Tax record ID
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
 *                 example: 2025-04-28
 *               amountPaid:
 *                 type: integer
 *                 example: 175000
 *               comment:
 *                 type: string
 *                 example: "Sug'urta uchun to'lov"
 *     responses:
 *       200:
 *         description: Tax record updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Tax record not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:id', updateTax);

/**
 * @swagger
 * /api/tax/{id}:
 *   delete:
 *     summary: Delete a tax record
 *     tags: [Tax]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Tax record ID
 *     responses:
 *       200:
 *         description: Tax record deleted successfully
 *       404:
 *         description: Tax record not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteTax);

export default router;
