var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');



router.get('/add', productController.add);
router.get('/detalle/:id', productController.index);


module.exports = router;