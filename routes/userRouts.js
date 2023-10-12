const router = require('express').Router();
const userController = require('../controllar/userControllar');
const auth = require("../middlware/auth");



// LOGIN
router.post('/login', userController.signIn);

router.get('/login/:email',userController.getUserDataById)

// router.get('/details',auth, userController.getUserDataById);

module.exports = router;