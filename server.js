const User = require('./models/User');
const Item = require('./models/Item');
const Cart = require('./models/Cart');
const CartItem = require('./models/Cart-Item');
const Review = require('./models/Review');
const userRoute = require('./routes/user');
const itemRoute = require('./routes/item');
const cartRoute = require('./routes/cart');
const reviewRoute = require('./routes/review');
const cartItem = require('./routes/cartItems');
const verifyAuth = require('./verifyToken');
const stripeRoute = require('./routes/stripe');


const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');

const db = require('./config/database');

// app.use(bodyParser.json());
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// -------------------------------------- Test Database Connection------------------------------------
db.authenticate()
.then(() => console.log('Database is connected...'))
.catch(err => console.log('Error', err));


//---------------------------------------- Sync Database Models-------------------------------------
User.hasMany(Cart, {foreignKey: 'userId' });
Cart.belongsTo(User, { constraints: true, onDelete: 'CASCADE'});
Cart.belongsToMany(Item, { through: CartItem, as: 'items', foreignKey: 'cartId', otherKey: 'itemId'});
Item.belongsToMany(Cart, { through: CartItem, as: 'cart', foreignKey: 'itemId', otherKey: 'cartId'});
User.belongsToMany(Item, { through: Review, as: 'userReviews', foreignKey: 'userId', otherKey: 'itemId'});
Item.belongsToMany(User, { through: Review, as: 'itemReviews', foreignKey: 'itemId', otherKey: 'userId'});


// db.sync({ force: true });


//---------------------------------------Route Middleware --------------------------------------------
app.use('/user', userRoute);
app.use('/shop', itemRoute);
app.use('/cart', verifyAuth, cartRoute);
app.use('/cart-item', cartItem);
app.use('/reviews', reviewRoute);
app.use('/stripe', stripeRoute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server is running on PORT ${PORT}`)});