import Joi from 'joi';

const createDrainageValidation = Joi.object({
  date: Joi.date().iso().required(),
  hoursWorked: Joi.number().positive().required(),
  totalSalary: Joi.number().positive().required(),
});

const updateDrainageValidation = Joi.object({
  date: Joi.date().iso().optional(),
  hoursWorked: Joi.number().positive().optional(),
  totalSalary: Joi.number().positive().optional(),
});

export { createDrainageValidation, updateDrainageValidation };

