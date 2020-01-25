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
POST /users/register HTTP/1.1

Host: localhost:3000
Content-Type: application/json
cache-control: no-cache
Postman-Token: 634ade04-a0b1-469a-a253-4c045d84d222

{
	"name": "Paresh Barad",
	"email": "paresh@gmail.com",
	"password": "123456"
}

-----------------------------------------------------------------------------------
POST /users/login HTTP/1.1

Host: localhost:3000
Content-Type: application/json
cache-control: no-cache
Postman-Token: c0cecaf4-ba48-4479-ad41-1350e8748912

{
	"email": "paresh@gmail.com",
	"password": "123456"
}

-----------------------------------------------------------------------------------
POST /todos/add HTTP/1.1

Host: localhost:3000
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3ODIwOTI5OX0.QZtxPPM5-UmoiL2Sfr_StpHOJHN7OT79TIlaDvSoThE
cache-control: no-cache
Postman-Token: ae5ab317-c427-4389-8ad3-a875216a89c1

{
	"title": "First todo"
}

------------------------------------------------------------
GET /todos/list HTTP/1.1

Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3ODIwOTI5OX0.QZtxPPM5-UmoiL2Sfr_StpHOJHN7OT79TIlaDvSoThE
cache-control: no-cache
Postman-Token: 6ffe6723-85a5-44f0-8c5a-effea2ee8ed4

--------------------------------------------------------------------------------------------
DELETE /todos/delete/1 HTTP/1.1

Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3ODIwOTI5OX0.QZtxPPM5-UmoiL2Sfr_StpHOJHN7OT79TIlaDvSoThE
cache-control: no-cache
Postman-Token: 39e8b943-22b3-4057-9d46-6cb9ad4eddbd
```