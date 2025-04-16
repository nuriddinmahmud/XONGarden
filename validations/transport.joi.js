import Joi from "joi";

const createTransportValidation = Joi.object({
  date: Joi.date().iso().required(),
  transportType: Joi.string().min(1).required(),
  comment: Joi.string().min(1).required(),
});

const updateTransportValidation = Joi.object({
  date: Joi.date().iso().optional(),
  transportType: Joi.string().min(1).optional(),
  comment: Joi.string().min(1).optional(),
});

export { createTransportValidation, updateTransportValidation };
