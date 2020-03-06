const jwt = require('jsonwebtoken');


const verifyAuth = (req, res, next) => {
  const token = req.header('Authorization');
  console.log('TOKEN', token)
  if(!token) return res.status(401).send('Access denied');
  try {
    const verifiedUser = jwt.verify(token, process.env.USER_TOKEN);
    req.user = verifiedUser;
    console.log('USER', verifiedUser)
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
}

module.exports = verifyAuth;