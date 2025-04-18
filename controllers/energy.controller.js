import {
  createEnergyValidation,
  updateEnergyValidation,
} from "../validations/energy.joi.js";

import Energy from "../models/energy.model.js";

export const createEnergy = async (req, res) => {
  try {
    const { error } = createEnergyValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const energy = await Energy.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      message: "Energy payment record created successfully.",
      data: energy,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getAllEnergies = async (req, res) => {
  try {
    const energies = await Energy.findMany({
      orderBy: { date: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "All energy records fetched successfully.",
      data: energies,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getEnergyById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const energy = await Energy.findUnique({ where: { id } });

    if (!energy) {
      return res.status(404).json({
        success: false,
        message: "Energy record not found.",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Energy record fetched successfully.",
      data: energy,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const updateEnergy = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { error } = updateEnergyValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const existing = await Energy.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Energy record not found.",
        data: null,
      });
    }

    const updated = await Energy.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: "Energy record updated successfully.",
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

export const deleteEnergy = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await Energy.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Energy record not found.",
        data: null,
      });
    }

    await Energy.delete({ where: { id } });

    res.status(200).json({
      success: true,
      message: "Energy record deleted successfully.",
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
