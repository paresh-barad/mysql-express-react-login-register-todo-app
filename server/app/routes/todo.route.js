const todoController = require('../controllers/todo.controller');
const express = require('express');
const router = express.Router();

router.post('/add', todoController.add);
router.get('/list', todoController.list);
router.delete('/delete/:todoId', todoController.delete);

module.exports = router;


