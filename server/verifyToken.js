const jwt = require('jsonwebtoken');


const verifyAuth = (req, res, next) => {
  // -------------- gets token from headers ----------------
  const token = req.header('Authorization');
  console.log('TOKEN', token)
    if(!token) {
        return res.status(401).send('Access denied');
    } else {
        jwt.verify(token, process.env.USER_TOKEN, (err, user) => {
            req.user = user
            next();
        })
    }   
}

module.exports = verifyAuth;