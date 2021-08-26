const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TodoItem = mongoose.model("TodoItem", todoSchema);

module.exports = TodoItem;
