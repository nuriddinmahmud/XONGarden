import Joi from "joi";

const createFoodValidation = Joi.object({
  date: Joi.date().iso().required(),
  shopName: Joi.string().positive().required(),
  price: Joi.number().positive().required(),
});

const updateFoodValidation = Joi.object({
  date: Joi.date().iso().optional(),  
  shopName: Joi.string().positive().optional(),
  price: Joi.number().positive().optional(),
}); 

export { createFoodValidation, updateFoodValidation };