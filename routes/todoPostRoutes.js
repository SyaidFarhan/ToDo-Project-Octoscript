const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todocontrollers');
const { validateCreateToDo, validateEditToDo } = require('../middleware/validateToDo');

/**
 * @swagger
 * tags:
 *   name: ToDos
 *   description: ToDo management API
 */



/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all ToDos
 *     tags: [ToDos]
 *     responses:
 *       200:
 *         description: List of all ToDos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ToDo'
 */
router.get('/todos', todoController.getAllToDos);

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Get a ToDo by ID
 *     tags: [ToDos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ToDo ID
 *     responses:
 *       200:
 *         description: The ToDo data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToDo'
 *       404:
 *         description: ToDo not found
 */
router.get('/todos/:id', todoController.getToDoById);


/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new ToDo
 *     tags: [ToDos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateToDo'
 *     responses:
 *       201:
 *         description: The created ToDo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToDo'
 *       400:
 *         description: Invalid input
 */
router.post('/todos', validateCreateToDo, todoController.createToDo);

/**
 * @swagger
 * /edit/{id}:
 *   post:
 *     summary: Edit an existing ToDo
 *     tags: [ToDos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ToDo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EditToDo'
 *     responses:
 *       200:
 *         description: The updated ToDo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToDo'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: ToDo not found
 */
router.post('/edit/:id', validateEditToDo, todoController.editToDo);

/**
 * @swagger
 * /delete/{id}:
 *   post:
 *     summary: Delete a ToDo
 *     tags: [ToDos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ToDo ID
 *     responses:
 *       200:
 *         description: ToDo deleted successfully
 *       404:
 *         description: ToDo not found
 */
router.post('/delete/:id', todoController.deleteToDo);

/**
 * @swagger
 * /:
 *   delete:
 *     summary: Delete all ToDos
 *     tags: [ToDos]
 *     responses:
 *       200:
 *         description: All ToDos deleted successfully
 */
router.delete('/', todoController.deleteAllToDos);

/**
 * @swagger
 * components:
 *   schemas:
 *     ToDo:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         postTitle:
 *           type: string
 *         brand:
 *           type: string
 *         platform:
 *           type: array
 *           items:
 *             type: string
 *         dueDate:
 *           type: string
 *           format: date-time
 *         payment:
 *           type: number
 *         status:
 *           type: string
 *           enum: [Pending, Scheduled, Posted, Cancelled]
 *         content:
 *           type: string
 *         mediaUrls:
 *           type: array
 *           items:
 *             type: string
 *         hashtags:
 *           type: array
 *           items:
 *             type: string
 *         assignedTo:
 *           type: string
 * 
 *     CreateToDo:
 *       type: object
 *       required:
 *         - postTitle
 *         - brand
 *         - platform
 *         - dueDate
 *       properties:
 *         postTitle:
 *           type: string
 *         brand:
 *           type: string
 *         platform:
 *           type: array
 *           items:
 *             type: string
 *         dueDate:
 *           type: string
 *           format: date-time
 *         payment:
 *           type: number
 *         status:
 *           type: string
 *           enum: [Pending, Scheduled, Posted, Cancelled]
 *         content:
 *           type: string
 *         mediaUrls:
 *           type: array
 *           items:
 *             type: string
 *         hashtags:
 *           type: array
 *           items:
 *             type: string
 *         assignedTo:
 *           type: string
 * 
 *     EditToDo:
 *       type: object
 *       properties:
 *         postTitle:
 *           type: string
 *         brand:
 *           type: string
 *         platform:
 *           type: array
 *           items:
 *             type: string
 *         dueDate:
 *           type: string
 *           format: date-time
 *         payment:
 *           type: number
 *         status:
 *           type: string
 *           enum: [Pending, Scheduled, Posted, Cancelled]
 *         content:
 *           type: string
 *         mediaUrls:
 *           type: array
 *           items:
 *             type: string
 *         hashtags:
 *           type: array
 *           items:
 *             type: string
 *         assignedTo:
 *           type: string
 */
router.delete('/', todoController.deleteAllToDos);


module.exports = router;
