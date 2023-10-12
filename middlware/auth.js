const Jwt = require('jsonwebtoken');
const { message, statusCode } = require('../utils/message');

module.exports = (req, res, next) => {
    let decoded;
    let token;

    try{

        if(!req.headers.authorization) {
            return res.status(statusCode.unAuthorized).json({ message: message.user.unAuthorized, status: statusCode.unAuthorized });
        } else if(req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        } else {
            token = req.headers.authorization;
        }
        decoded = Jwt.verify(token, process.env.SERECTKEY);
        req.decoded = decoded;
        next(); //decoded
    } catch(err) {
        console.log(err, 'error');
        return res.status(statusCode.unAuthorized).json({ message: message.user.unAuthorized, status: statusCode.unAuthorized })
    }
}
