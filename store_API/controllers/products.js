const product = require("../models/product");
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    name: 'vase table'
  });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const {company, featured, name} = req.query;
  const queryObject = {};

  if(featured){
    queryObject.featured = featured === 'true' ? true : false;
  }

  if(company){
    queryObject.company = company;
  }

  if(name){
    queryObject.name = {$regex: name, $options: 'i'}
  }

  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
