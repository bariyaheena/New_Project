const router = require('express').Router();
const studentControllar = require('../controllar/studentControllar');
// const auth = require("../middlware/auth");


router.post('/student',studentControllar.addStudent);

module.exports = router;