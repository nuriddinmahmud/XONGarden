import Joi from "joi";

const createDrainageValidation = Joi.object({
  date: Joi.date().iso().required(),
  hoursWorked: Joi.INTEGER().positive().required(),
  totalSalary: Joi.INTEGER().positive().required(),
});

const updateDrainageValidation = Joi.object({
  date: Joi.date().iso().optional(),
  hoursWorked: Joi.INTEGER().positive().optional(),
  totalSalary: Joi.INTEGER().positive().optional(),
});

export { createDrainageValidation, updateDrainageValidation };
