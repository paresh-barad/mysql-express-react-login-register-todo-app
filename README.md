## Login, Register and crud of todos from Scratch using Mysql,Express, Jwt and React

If you think this source code is useful, it will be great if you just give it star.

# Quick Start for Server

**Clone the repository**<br/>
`git clone https://github.com/paresh-barad/mysql-express-react-login-register-todo-app.git`

**Go inside the directory**<br/>
`cd mysql-express-react-login-register-todo-app/server`

**Install dependencies**<br/>
`npm install`

**Start development server**<br/>
`node server.js`

# Quick Start for Client

**Go inside the directory**<br/>
`cd mysql-express-react-login-register-todo-app/client`

**Install dependencies**<br/>
`npm install`

**Start development server**<br/>
`npm start`

# Database jwt Configration for server
Global variables such as mysql host, user, password and database can be set in `server/config/database.config.js`
You can be change jwt secret in `server/config/jwt.config.js`

**Restful API**<br/>
An api with the following routes
```
POST    /users/registerMe
POST    /users/loginMe
GET     /users/usersMe
GET     /users/current
GET     /users/:id
PUT     /users/:id
DELETE  /users/:id
```

