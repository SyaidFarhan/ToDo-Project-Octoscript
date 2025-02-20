const Joi = require('joi');

// Schema validasi untuk membuat ToDo
const createToDoSchema = Joi.object({
  postTitle: Joi.string().required(),
  brand: Joi.string().required(),
  platform: Joi.array().items(Joi.string()).required(),
  dueDate: Joi.date().required(),
  payment: Joi.number().default(0),
  status: Joi.string().valid("Pending", "Scheduled", "Posted", "Cancelled").default("Pending"),
  content: Joi.string().allow(''), 
  mediaUrls: Joi.array().items(Joi.string()), 
  hashtags: Joi.array().items(Joi.string()), 
  assignedTo: Joi.string().allow(''), 
});

// Schema validasi untuk mengedit ToDo
const editToDoSchema = Joi.object({
  postTitle: Joi.string(),
  brand: Joi.string(),
  platform: Joi.array().items(Joi.string()),
  dueDate: Joi.date(),
  payment: Joi.number(),
  status: Joi.string().valid("Pending", "Scheduled", "Posted", "Cancelled"),
  content: Joi.string().allow(''), 
  mediaUrls: Joi.array().items(Joi.string()), 
  hashtags: Joi.array().items(Joi.string()), 
  assignedTo: Joi.string().allow(''), 
});

module.exports = {
  createToDoSchema,
  editToDoSchema,
};