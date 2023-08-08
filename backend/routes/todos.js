const router = require('express').Router();
let Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
  const todo = req.body.todo;
  // create a new Todo object
  const newTodo = await new Todo({
    todo,
  });

  console.log(newTodo);
  // save the new object (newTodo)
  newTodo
    .save()
    .then(() => res.json('Todo added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Todo.findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete(async (req, res) => {
    console.log('delete logged');
    await Todo.findByIdAndDelete(req.params.id)
      .then(() => res.json('Todo deleted.'))
      .catch((err) => res.status(400).json('Error: ' + err));
  });
  
router.route('/update/:id').post(async (req, res) => {
  console.log(req.params.id);
  await  Todo.findById(req.params.id)
    .then((todo) => {
      todo.todo = req.body.todo;
  
      todo
        .save()
        .then(() => res.json('Todo updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
  });

  module.exports = router;




  