const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//------------------------------------------- Create User -----------------------------------------------
exports.postAddUser = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 12)

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await newUser.save();
        res.send({ savedUser: savedUser.id });
    } catch (err) {
        res.status(400).send(err)
    }
};


exports.loginUser = async (req, res, next) => {
//---------------------------------------- Finds User in database by Username ------------------------------
    const user = await User.findOne({ where: { username: req.body.username }});

    if(!user) return res.status(400).send('Username or password is incorrect');


//---------------------------------------- Compares password in request body with the User's password ---------
    const userPassword = await bcrypt.compare(req.body.password, user.password);
    if(!userPassword) return res.status(400).send('Username or password is incorrect');

//---------------------------------------------- Signs Token --------------------------------------------
    const token = jwt.sign({ _id: user._id }, process.env.USER_TOKEN );
    res.send({'Bearer': token });
}








