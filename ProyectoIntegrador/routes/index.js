var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');
const mainController = require('../controllers/mainController');

router.get('/search-results', mainController.searchResults);
router.get('/', productController.home);

module.exports = router;





