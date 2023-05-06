const Product = require('../models/Product');
const {host,port} = require('../config')

async function addProduct(req,res){
  try {
    const {
      name,
      size,
      unitaryPrice,
      description
    } = req.body 

    const product = ({
      name,
      size,
      unitaryPrice,
      description,
      imgUrl: req.file ? `${host}:${port}/public/${req.file.filename}` : null // si el campo de img es bacio ps se pone null
    }
    )

    const productStored = await Product.create(product);
    res.status(200).send({productStored});
  } catch (error) {
    res.status(500).send({message:error.message});
  }
}

// async function getProducts (req,res){
//   try {
//     const products = await Product.find().lean().exec();
//     res.status(200).send({products});
//   } catch (error) {
//     console.log(`He tenido un problema grabe para mostrarte datos😒🤒`,error)
//   }
// }

async function getProducts(req, res) {// trae los datos de la base de datos y tambien tiene un limite por pagina
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const productsCount = await Product.countDocuments();
    const products = await Product.find()
      .skip(startIndex)
      .limit(limit)
      .lean()
      .exec();

    const pagination = {
      totalPages: Math.ceil(productsCount / limit),
      currentPage: page,
      hasNextPage: endIndex < productsCount,
      hasPrevPage: startIndex > 0,
      nextPage: endIndex,
      prevPage: startIndex - limit,
    };

    res.status(200).send({ products, pagination });
  } catch (error) {
    console.log(`He tenido un problema grabe para mostrarte datos😒🤒`, error);
  }
}

module.exports = {
  addProduct,
  getProducts
}