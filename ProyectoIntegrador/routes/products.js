var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/add', productController.add);
router.get('/detalle/:id', productController.detalle);
router.post('/create', productController.create);

module.exports = router;
