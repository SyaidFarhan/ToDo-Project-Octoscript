const ToDoPost = require('../models/todo');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');

exports.getAllToDos = catchAsync(async (req, res) => {
    const allToDos = await ToDoPost.find({});
    res.status(200).json({ success: true, data: allToDos });
});

exports.getToDoById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const todo = await ToDoPost.findById(id);

    if (!todo) throw new ExpressError("ToDo Post not found", 404);

    res.status(200).json({ success: true, data: todo });
});

exports.createToDo = catchAsync(async (req, res) => {
    const { postTitle, brand, platform, dueDate, payment, status, content, mediaUrls, hashtags, assignedTo } = req.body;

    if (!postTitle || !brand || !platform || !dueDate) {
        throw new ExpressError("Missing required fields", 400);
    }

    const newToDo = await ToDoPost.create({
        postTitle,
        brand,
        platform,
        dueDate,
        payment,
        status,
        content,
        mediaUrls,
        hashtags,
        assignedTo
    });

    res.status(201).json({ success: true, data: newToDo });
});

exports.editToDo = catchAsync(async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedPost = await ToDoPost.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedPost) throw new ExpressError("ToDo Post not found", 404);

    res.status(200).json({ success: true, data: updatedPost });
});

exports.deleteToDo = catchAsync(async (req, res) => {
    const { id } = req.params;

    const deletedPost = await ToDoPost.findByIdAndDelete(id);

    if (!deletedPost) throw new ExpressError("ToDo Post not found", 404);

    res.status(200).json({ success: true, message: "Post deleted successfully" });
});

exports.deleteAllToDos = catchAsync(async (req, res) => {
    await ToDoPost.deleteMany({});
    res.status(200).json({ success: true, message: "All ToDo posts deleted" });
});
