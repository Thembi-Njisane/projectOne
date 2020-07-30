const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProductDB', {useNewUrlParser : true, useUnifiedTopology: true },
console.log('Mongodb connection succeeded') 
);

module.exports = mongoose;