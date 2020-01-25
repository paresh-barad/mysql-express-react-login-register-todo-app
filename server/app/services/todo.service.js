const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtConfig = require('../../config/jwt.config');
const connection = require('../helpers/dbconnect.helper');

exports.add = (todoParam) => {
	return new Promise( async (resolve, reject) => {
		let todo = {
			title: todoParam.title,
			userId: todoParam.userId,
		}
		connection.query(`insert into todos set ?`, todo, (error, todoInsert) => {
			if(error){
				return reject(error);
			} else {
				return resolve(todoInsert);
			}
		});
	});
}

exports.list = (reqParam) => {
	return new Promise( async (resolve, reject) => {
		connection.query(`select id,title,userID from todos where userId = ?`, [reqParam.userId], function (err, todoResult, fields) {
			if (err) {
				return reject(error);
			} else {
				return resolve(todoResult);
			}
		});
	});
}

exports.delete = (reqParam) => {
	return new Promise( async (resolve, reject) => {
		connection.query(`delete from todos where userId = ? and id = ?`, [reqParam.userId, reqParam.todoId], function (err, todoResult, fields) {
			if (err) {
				return reject(error);
			} else {
				return resolve(todoResult);
			}
		});
	});
}