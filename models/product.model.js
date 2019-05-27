const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: String
});

const Product = mongoose.model('Product', productSchema);
// Product.watch().on('change', data => console.log(new Date(), data));

module.exports = Product;