const { createToDoSchema, editToDoSchema } = require('../models/todoValidator');

const validateCreateToDo = (req, res, next) => {
  const { error } = createToDoSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateEditToDo = (req, res, next) => {
  const { error } = editToDoSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateCreateToDo,
  validateEditToDo,
};