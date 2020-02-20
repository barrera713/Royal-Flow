const User = require('../models/User');



exports.postAddUser = async (req, res, next) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
    })
    try {
        const savedUser = await newUser.save();
        res.send({ savedUser });
    } catch (err) {
        res.status(400).send(err)
    }
};


