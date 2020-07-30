const { Mongoose } = require("mongoose")

const mongoose = require('mongoose');

const Product = mongoose.model('Product',{
    prodName:{type:String},
    quantity:{type:Number},
    price:{type:String}
});

module.exports = {Product};