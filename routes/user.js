const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller');




router.post('/new', users_controller.postAddUser);




module.exports = router;