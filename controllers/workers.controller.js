import prisma from "../config/database.js";
import {
  createWorkerValidation,
  updateWorkerValidation,
} from "../validations/workers.joi.js";

export const createWorker = async (req, res) => {
  try {
    const { error } = createWorkerValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const worker = await prisma.worker.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      message: "Worker record created successfully.",
      data: worker,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getAllWorkers = async (req, res) => {
  try {
    const workers = await prisma.worker.findMany({
      orderBy: { date: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "All worker records fetched successfully.",
      data: workers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getWorkerById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const worker = await prisma.worker.findUnique({ where: { id } });

    if (!worker) {
      return res.status(404).json({
        success: false,
        message: "Worker record not found.",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Worker record fetched successfully.",
      data: worker,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const updateWorker = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { error } = updateWorkerValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const existing = await prisma.worker.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Worker record not found.",
        data: null,
      });
    }

    const updated = await prisma.worker.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: "Worker record updated successfully.",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const deleteWorker = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await prisma.worker.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Worker record not found.",
        data: null,
      });
    }

    await prisma.worker.delete({ where: { id } });

    res.status(200).json({
      success: true,
      message: "Worker record deleted successfully.",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};
