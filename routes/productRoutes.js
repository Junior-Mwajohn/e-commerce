const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/add', productController.getAddProduct);
router.post('/add', productController.postAddProduct);
router.get('/edit/:id', productController.getEditProduct);
router.post('/edit', productController.postEditProduct);
router.post('/delete', productController.postDeleteProduct);

module.exports = router;
