const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const [products] = await Product.fetchAll();
    res.render('product-list', { products });
  } catch (err) {
    console.error(err);
  }
};

exports.getAddProduct = (req, res) => {
  res.render('add-product');
};

exports.postAddProduct = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const product = new Product(null, title, price, description);
    await product.save();
    res.redirect('/products');
  } catch (err) {
    console.error(err);
  }
};

exports.getEditProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const [product] = await Product.findById(productId);
    res.render('edit-product', { product: product[0] });
  } catch (err) {
    console.error(err);
  }
};

exports.postEditProduct = async (req, res) => {
  try {
    const { id, title, price, description } = req.body;
    const product = new Product(id, title, price, description);
    await product.save();
    res.redirect('/products');
  } catch (err) {
    console.error(err);
  }
};

exports.postDeleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    await Product.deleteById(id);
    res.redirect('/products');
  } catch (err) {
    console.error(err);
  }
};
