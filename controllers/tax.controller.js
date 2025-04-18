import Tax from "../models/tax.model.js";
import {
  createTaxValidation,
  updateTaxValidation,
} from "../validations/tax.joi.js";

export const createTax = async (req, res) => {
  try {
    const { error } = createTaxValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const tax = await Tax.create(req.body);

    res.status(201).json({
      success: true,
      message: "Tax record created successfully.",
      data: tax,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getAllTaxes = async (req, res) => {
  try {
    const taxes = await Tax.findAll({
      order: [["date", "DESC"]],
    });

    res.status(200).json({
      success: true,
      message: "All tax records fetched successfully.",
      data: taxes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getTaxById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const tax = await Tax.findByPk(id);

    if (!tax) {
      return res.status(404).json({
        success: false,
        message: "Tax record not found.",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Tax record fetched successfully.",
      data: tax,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const updateTax = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { error } = updateTaxValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const existing = await Tax.findByPk(id);
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Tax record not found.",
        data: null,
      });
    }

    await existing.update(req.body);

    res.status(200).json({
      success: true,
      message: "Tax record updated successfully.",
      data: existing,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const deleteTax = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await Tax.findByPk(id);
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Tax record not found.",
        data: null,
      });
    }

    await existing.destroy();

    res.status(200).json({
      success: true,
      message: "Tax record deleted successfully.",
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
