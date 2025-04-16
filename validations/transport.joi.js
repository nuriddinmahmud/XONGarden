import Joi from "joi";

const createTransportValidation = Joi.object({
  date: Joi.date().iso().required(),
  transportType: Joi.string().positive().required(),
  comment: Joi.string().positive().required(),
});

const updateTransportValidation = Joi.object({
  date: Joi.date().iso().optional(),
  transportType: Joi.string().positive().optional(),
  comment: Joi.string().positive().optional(),
});

export { createTransportValidation, updateTransportValidation };
