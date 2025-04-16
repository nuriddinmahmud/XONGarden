import prisma from '../config/database.js';
import {
  createDrainageValidation,
  updateDrainageValidation,
} from '../validations/drenaj.joi.js';

export const createDrainage = async (req, res) => {
  try {
    const { error } = createDrainageValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const newDrainage = await prisma.drainage.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      message: 'Drainage record created successfully.',
      data: newDrainage,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
      error: err.message,
    });
  }
};

export const getAllDrainages = async (req, res) => {
  try {
    const drainages = await prisma.drainage.findMany({
      orderBy: { date: 'desc' },
    });

    res.status(200).json({
      success: true,
      message: 'All drainage records fetched successfully.',
      data: drainages,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
      error: err.message,
    });
  }
};

export const getDrainageById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const drainage = await prisma.drainage.findUnique({
      where: { id },
    });

    if (!drainage) {
      return res.status(404).json({
        success: false,
        message: 'Drainage record not found.',
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Drainage record fetched successfully.',
      data: drainage,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
      error: err.message,
    });
  }
};

export const updateDrainage = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { error } = updateDrainageValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const existing = await prisma.drainage.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Drainage record not found.',
        data: null,
      });
    }

    const updated = await prisma.drainage.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: 'Drainage record updated successfully.',
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
      error: err.message,
    });
  }
};

export const deleteDrainage = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await prisma.drainage.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Drainage record not found.',
        data: null,
      });
    }

    await prisma.drainage.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Drainage record deleted successfully.',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
      error: err.message,
    });
  }
};
