const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todocontrollers');
const { validateCreateToDo, validateEditToDo } = require('../middleware/validateToDo');


router.get('/todos', todoController.getAllToDos);
router.get('/todos/:id', todoController.getToDoById);

router.post('/todos', validateCreateToDo, todoController.createToDo);
router.post('/edit/:id', validateEditToDo, todoController.editToDo); 
router.post('/delete/:id', todoController.deleteToDo);
router.delete('/', todoController.deleteAllToDos);

module.exports = router;