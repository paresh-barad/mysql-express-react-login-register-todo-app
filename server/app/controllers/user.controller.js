const userService = require('../services/user.service');

exports.register = async (req, res,next) => {
	try {
		let userByEmail = await userService.getUserByEmail(req.body.email);
		if(userByEmail.length > 0){
			return res.json({
				status: true,
				message: `User already exist, please login`,
				result: null
			});
		}
		let userResult = await userService.register(req.body);
		if(userResult.affectedRows > 0){
			return res.json({
				status: true,
				message: `User register sucessfull`,
				result: null
			});
		} else {
			return res.json({
				status: true,
				message: `Somthing went wrong`,
				result: null
			});
		}
	} catch (error) {
		return res.json({
			status: true,
			message: `Somthing went wrong : ${error.message}`,
			result: null
		});
	}
}

exports.login = async (req, res, next) => {
	try {
		let user = await userService.login(req.body);
		
		if (user) {
			return res.json({
				status: true,
				message: `Login done`,
				result: user
			});
		} else {
			return res.json({
				status: false,
				message: `Username or password is incorrect`,
				data: null
			});
		}
	} catch (error) {
		return res.json({
			status: false,
			message: `Somthing went wrong : ${error.message}`,
			result: null
		});
	}
}

exports.getById = async (req, res, next) => {
	try {
		let user = userService.getById(req.params.id);
		if(user){
			return res.json({
				status: true,
				message: `User is found`,
				result: user
			});
		} else {
			return res.json({
				status: true,
				message: `User not found for givan id`,
				result: null
			});
		}
	} catch (error) {
		return res.json({
			status: false,
			message: `Somthing went wrong ${error.message}`,
			result: null
		});
	}
}