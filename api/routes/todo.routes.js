module.exports = app => {
    const todoController = require('../controllers/todo.controller');
    const routes = require('express').Router();

    // creating new todo
    routes.post('/', todoController.create);

    //retrieving all todo's
    routes.get('/todos', todoController.findAll);

    // retrieving single todo
    routes.get('/:id', todoController.findOne);

    // update a todo with id 
    routes.put('/:id', todoController.update)

    // deleting a single todo
    routes.delete('/:id', todoController.delete);

    // deleting all todos
    routes.delete('/', todoController.deleteAll);

    app.use('/list', routes);
}