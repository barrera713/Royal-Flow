const User = require('../models/User');


//------------------------------------------- Create User -----------------------------------------------
exports.postAddUser = async (req, res, next) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
    })
    try {
        const savedUser = await newUser.save();
        res.send({ savedUser: savedUser.id });
    } catch (err) {
        res.status(400).send(err)
    }
};





