const mongoose = require('mongoose');


const CartSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    hour : String,
    price : Number,
   });
   
   const Cart = mongoose.model('cart', CartSchema);
   
   module.exports = Cart;