const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const errorHandler = require('./app/helpers/error-handler.helper');
const jwt = require('./app/helpers/jwt.helper');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
app.options('*', cors());
app.use(jwt.jwt());

const userRoute = require('./app/routes/user.route');
app.use('/users', userRoute);

const todoRoute = require('./app/routes/todo.route');
app.use('/todos', todoRoute);

// global error handler
app.use(errorHandler);

app.listen(3001, () => {
	console.log("Server is listening on port 3001");
});