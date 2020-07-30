const express = require('express');
const {Product} = require('../models/product');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


router.get('/', (req, res)=>{
Product.find((err, docs)=>{
if(!err){
res.send(docs);
}else
{
    console.log('error in retrieving products:' +JSON.stringify(err,undefined, 2));
}

});

});

router.post('/', (req, res)=>{
 const prod = new Product({
    prodName: req.body.prodName,
     quantity: req.body.quantity,
     price:req.body.price,
 });
prod.save((err, doc)=>{
if(!err){
    res.send(doc);
}else('Error in saving the product:' +JSON.stringify(err, undefined, 2));

});

});


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);

    var prod = {
        prodName: req.body.prodName,
        quantity: req.body.quantity,
        price: req.body.price,
         
    };
    Product.findByIdAndUpdate(req.params.id, {$set: prod}, {new: true}, (err, doc) => {
    if(!err){res.send(doc);}
    else{console.log('error in Product update:' + JSON.stringify(err,undefined, 2));}
 });
});


router.delete('/:id', (req, res) =>{
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);

    Product.findByIdAndRemove(req.params.id, (err,doc) => {
        if(!err){res.send(doc);}
        else{console.log('error in Product update:' + JSON.stringify(err,undefined, 2));}

    });
});



module.exports =router;