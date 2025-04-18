import express from 'express';
import {
  createTransport,
  getAllTransports,
  getTransportById,
  updateTransport,
  deleteTransport,
} from '../controllers/transport.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Transport
 *   description: API for managing transport records
 */

/**
 * @swagger
 * /api/transport:
 *   post:
 *     summary: Create a new transport record
 *     tags: [Transport]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - transportType
 *               - comment
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-26
 *               transportType:
 *                 type: string
 *                 example: "Truck"
 *               comment:
 *                 type: string
 *                 example: "Mallar tashildi"
 *     responses:
 *       201:
 *         description: Transport record created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post('/', createTransport);

/**
 * @swagger
 * /api/transport:
 *   get:
 *     summary: Get all transport records
 *     tags: [Transport]
 *     responses:
 *       200:
 *         description: List of all transport records
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllTransports);

/**
 * @swagger
 * /api/transport/{id}:
 *   get:
 *     summary: Get a transport record by ID
 *     tags: [Transport]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Transport record ID
 *     responses:
 *       200:
 *         description: Transport record fetched successfully
 *       404:
 *         description: Transport record not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getTransportById);

/**
 * @swagger
 * /api/transport/{id}:
 *   patch:
 *     summary: Update a transport record
 *     tags: [Transport]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Transport record ID
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
 *                 example: 2025-05-01
 *               transportType:
 *                 type: string
 *                 example: "Excavator"
 *               comment:
 *                 type: string
 *                 example: "Yer ishlari uchun transport"
 *     responses:
 *       200:
 *         description: Transport record updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Transport record not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:id', updateTransport);

/**
 * @swagger
 * /api/transport/{id}:
 *   delete:
 *     summary: Delete a transport record
 *     tags: [Transport]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Transport record ID
 *     responses:
 *       200:
 *         description: Transport record deleted successfully
 *       404:
 *         description: Transport record not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteTransport);

export default router;
