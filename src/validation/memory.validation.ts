import * as Joi from "joi";

const schemas = {
    validateAllValues: Joi.object().keys({
    title: Joi.string().min(3).max(100).required(),
    date: Joi.number().integer().optional(),
    memory: Joi.array().items(Joi.string().min(3).max(50).lowercase())
      .optional(),
    location: Joi.string().min(3).max(100).required(),
  }),
  validateId: Joi.object().keys({
  id: Joi.number().integer().min(1)
  }),
};

export default schemas;