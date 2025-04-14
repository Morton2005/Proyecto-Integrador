var express = require('express');
var router = express.Router();

const productContoller = require('../controllers/productController');



router.get('/add', productContoller.add);
router.get('/detalle/:id', productContoller.index);
router.get('/test', productContoller.test);

module.exports = router;