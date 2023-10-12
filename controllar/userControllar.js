const { message, statusCode } = require('../utils/message');
const userService = require('../services/userServices');
const validation = require('../utils/validation');
const token = require('../utils/token');

const { generateHash, comparePassword } = require('../utils/hasspassword');
const { decode } = require('jsonwebtoken');




const signIn = async (req, res) => {


    if (!req.body.email) {
        return res.status(statusCode.badRequest).json({ message: message.commonMessage.emailIsRequired, status: statusCode.badRequest });
    }
    if (!req.body.password) {
        return res.status(statusCode.badRequest).json({ message: message.commonMessage.passwordIsRequired, status: statusCode.badRequest });
    }

    const mailValidate = validation.isValidEmail(req.body.email);
    if (mailValidate === false) {
        return res.status(statusCode.badRequest).json({ message: message.commonMessage.isEmailValidate, status: statusCode.badRequest });
    }

    const passwordValidation = validation.isValidPassword(req.body.password);
    if (passwordValidation === false) {
        return res.status(statusCode.badRequest).json({ message: message.commonMessage.isPasswordValidate, status: statusCode.badRequest });
    }

    
    const hashingPassword = await generateHash(req.body.password);

    const datas = {
        userId: req.body.userId,
        email: req.body.email,
        password: hashingPassword
    };


    try {
        
        const existsUser = await userService.createUser(datas);

        const payload = {
            email: existsUser.email
        }

        const Token = await token.generateToken(payload);

        const detail = {
            userId:existsUser.userId,
            email:existsUser.email,
            password:existsUser.password,
            token: Token
        }
        // if (!existsUser) {
        //     return res.status(statusCode.badRequest).json({ message: err });
        // }
       
        return res.status(statusCode.success).json({ message: message.signUp.registration, status: statusCode.success, data:detail });
       
    } catch (err) {
        //
        return res.status(statusCode.badRequest).json({ message: err, });
    }
}

const getUserDataById = async (req, res) => {

    try {
        const email = req.params.email  ;
        const query = { email : email };

        const getuserdetails = await userService.findUser(query);
        return res.status(statusCode.success).json({ message: '', status: statusCode.success, data: getuserdetails });

    } catch (err) {
        console.log(err, 'error');
        return res.status(statusCode.badRequest).json({ message: err, status: statusCode.badRequest });
    }
}


module.exports = { 
    signIn,
    getUserDataById
}
