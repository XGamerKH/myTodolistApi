const express = require("express");
const TodoItem = require("../models/todo.js");

const router = express.Router();

const getTodo = async (req, res) => {
  try {
    const todoItems = await TodoItem.find();
    res.status(200).json(todoItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  const { body } = req;
  const newTodo = new TodoItem(body);
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getOneTodo = async (req, res) => {
  try {
    const allTodos = await TodoItem.find();
    const requestedTodo = allTodos.filter((item) => item.id === req.params.id);
    res.status(200).json(requestedTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const itemToDelete = await TodoItem.deleteOne({ _id: req.params.id });
    res.status(200).json(itemToDelete);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

router.route("/").get(getTodo).post(createTodo);
router.route("/:id").get(getOneTodo).delete(deleteTodo);

module.exports = router;
