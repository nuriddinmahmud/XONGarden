import Joi from "joi";

const createTaxValidation = Joi.object({
  date: Joi.date().iso().required(),
  amountPaid: Joi.INTEGER().positive().required(),
  comment: Joi.string().min(1).required(),
});

const updateTaxValidation = Joi.object({
  date: Joi.date().iso().optional(),
  amountPaid: Joi.INTEGER().positive().optional(),
  comment: Joi.string().min(1).optional(),
});

export { createTaxValidation, updateTaxValidation };
