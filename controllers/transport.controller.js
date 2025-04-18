import Transport from "../models/transport.model.js";
import {
  createTransportValidation,
  updateTransportValidation,
} from "../validations/transport.joi.js";

export const createTransport = async (req, res) => {
  try {
    const { error } = createTransportValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const transport = await Transport.create(req.body);

    res.status(201).json({
      success: true,
      message: "Transport record created successfully.",
      data: transport,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getAllTransports = async (req, res) => {
  try {
    const transports = await Transport.findAll({
      order: [["date", "DESC"]],
    });

    res.status(200).json({
      success: true,
      message: "All transport records fetched successfully.",
      data: transports,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getTransportById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const transport = await Transport.findByPk(id);

    if (!transport) {
      return res.status(404).json({
        success: false,
        message: "Transport record not found.",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Transport record fetched successfully.",
      data: transport,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const updateTransport = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { error } = updateTransportValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const transport = await Transport.findByPk(id);
    if (!transport) {
      return res.status(404).json({
        success: false,
        message: "Transport record not found.",
        data: null,
      });
    }

    await transport.update(req.body);

    res.status(200).json({
      success: true,
      message: "Transport record updated successfully.",
      data: transport,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const deleteTransport = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const transport = await Transport.findByPk(id);
    if (!transport) {
      return res.status(404).json({
        success: false,
        message: "Transport record not found.",
        data: null,
      });
    }

    await transport.destroy();

    res.status(200).json({
      success: true,
      message: "Transport record deleted successfully.",
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
