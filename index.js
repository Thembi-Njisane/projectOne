const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

const mongoose =require('./db');
const prodRoute = require('./routes/routeProduct.js');


const app = express();

app.use(bodyParser.json());
app.use(cors({origin:'http://locahost:4200'}));

app.listen(3000, (req, res)=>{
    console.log('Server is connected at port 3000');
});

app.use('/products', prodRoute);