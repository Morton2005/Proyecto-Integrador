var express = require('express');
var router = express.Router();

const productContoller = require('../controllers/productController');


router.get('/:id', productContoller.index);
router.get('/add', productContoller.add);

module.exports = router;