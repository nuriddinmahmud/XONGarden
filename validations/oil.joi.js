import Joi from "joi";

const createOilValidation = Joi.object({
  date: Joi.date().iso().required(),
  price: Joi.number().positive().required(),
  comment: Joi.string().positive().required(),
});

const updateOilValidation = Joi.object({
  date: Joi.date().iso().optional(),
  price: Joi.number().positive().optional(),
  comment: Joi.string().positive().optional(),
});

export { createOilValidation, updateOilValidation };
