const express = require('express');
const product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    product.find()
        .then((products) => res.status(200).json(products))
        .catch(err => res.status(400).json({ error: err }))
}

exports.getSingleProdut = (req, res, next) => {
    product.findById(req.params.id) 
        .then((product) => res.status(200).json(product))
        .catch(err => res.status(400).json({ error: err }))
}