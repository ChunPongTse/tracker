const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const todoSchema = new Schema({
  todo: { type: String, required: true, },
});

// This Activitry creates the collection called activitimodels
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;