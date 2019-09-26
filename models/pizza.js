// models/task.js

'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email : String , 
    toppings : {name : String , price : String} , 
    deliveryAddress : String , 
    city : String , 
    pinCode : String,
    total : Number,
    deliveryDate : { type: Date, default: Date.now },
    deliveryTime : { type: Date, default: Date.now },
    selectedPizza : [{name : String , price : String}],

});

module.exports = mongoose.model('pizza', schema);