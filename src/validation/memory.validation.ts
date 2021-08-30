import * as Joi from "joi";

const schemas = {
  validateAllValues: Joi.object().keys({
    memory_id: Joi.number().integer().min(1).optional(),
    title: Joi.string().min(3).max(100).required(),
    date: Joi.date().iso().optional(),
    memory: Joi.string().required(),
    location: Joi.string().min(1).max(100).required(),
  }),

  validateId: Joi.object().keys({
    memory_id: Joi.number().integer().required()
  }),
};

export default schemas;