var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');

router.get('/search-results', mainController.searchResults);
router.get('/', productController.home);

module.exports = router;





