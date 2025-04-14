var express = require('express');
var router = express.Router();

const productContoller = require('../controllers/productController');



router.get('/add', productContoller.add);
router.get('/:id', productContoller.index);

module.exports = router;