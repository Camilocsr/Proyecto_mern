const Product = require('../models/Product');
const {host,port} = require('../config');

async function addProduct(req,res){
  try {
    const {
      name,
      size,
      unitaryPrice,
      description,
      categoria
    } = req.body 

    const product = ({
      name,
      size,
      unitaryPrice,
      description,
      categoria,
      imgUrl: req.file ? `${host}:${port}/public/${req.file.filename}` : null, // si el campo de img es bacio ps se pone null
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

async function deleteProducts(req, res) {
  try {
    const productId = req.params.id;

    // Lógica para eliminar el producto de la base de datos
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).send({ message: 'Producto no encontrado' });
    }

    res.status(200).send({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const editionProducts = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      size,
      unitaryPrice,
      categoria,
      description
    } = req.body;

    const productData = {};

    // Verificar y agregar los campos que se enviaron en la solicitud
    if (name) {
      productData.name = name;
    }
    if (size) {
      productData.size = size;
    }
    if (unitaryPrice) {
      productData.unitaryPrice = unitaryPrice;
    }
    if (description) {
      productData.description = description;
    }
    if (categoria) {
      productData.categoria = categoria;
    }
    if (req.file) {
      productData.imgUrl = `${host}:${port}/public/${req.file.filename}`;
    }

    const productStored = await Product.findByIdAndUpdate(id, productData, { new: true });
    if (!productStored) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ productStored });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  deleteProducts,
  editionProducts
}