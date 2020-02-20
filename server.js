const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/database');
const User = require('./models/User');
const Item = require('./models/Item');
const Cart = require('./models/Cart');
const CartItem = require('./models/Cart-Item');
const userRoute = require('./routes/user');
const itemRoute = require('./routes/item');
dotenv.config();


const app = express();
app.use(bodyParser.json())


// -------------------------------------- Test Database Connection---------------------------------
db.authenticate()
.then(() => console.log('Database is connected...'))
.catch(err => console.log('Error', err));


//---------------------------------------- Sync Database Models-------------------------------------
// Item.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Item);
// User.hasOne(Cart);
Cart.belongsTo(User, { constraints: true, onDelete: 'CASCADE'});
Cart.belongsToMany(Item, { through: CartItem });
Item.belongsToMany(Cart, { through: CartItem });

// db.sync({ force: true });


//---------------------------------------Route Middleware --------------------------------------------
app.use(cors());
app.use('/user', userRoute);
app.use('/product', itemRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server is running on PORT ${PORT}`)});