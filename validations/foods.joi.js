import Joi from "joi";

const createFoodValidation = Joi.object({
  date: Joi.date().iso().required(),
  shopName: Joi.string().min(1).required(),
  price: Joi.INTEGER().positive().required(),
});

const updateFoodValidation = Joi.object({
  date: Joi.date().iso().optional(),
  shopName: Joi.string().min(1).optional(),
  price: Joi.INTEGER().positive().optional(),
});

export { createFoodValidation, updateFoodValidation };
