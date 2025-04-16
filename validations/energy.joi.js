import Joi from "joi";

const createEnergyValidation = Joi.object({
  date: Joi.date().iso().required(),
  amountPaid: Joi.number().positive().required(),
  comment: Joi.string().positive().required(),
});

const updateEnergyValidation = Joi.object({
  date: Joi.date().iso().optional(),
  amountPaid: Joi.number().positive().optional(),
  comment: Joi.string().positive().optional(),
});

export { createEnergyValidation, updateEnergyValidation };