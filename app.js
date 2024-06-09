const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Root Route
app.get('/', (req, res) => {
  res.render('index');
});

// Routes
app.use('/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 3123;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
