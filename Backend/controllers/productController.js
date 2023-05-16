const Product = require('../models/Product');
const {host,port} = require('../config');

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

async function editionProducts(req, res) {
  try {
    const productId = req.params.id;

    // Obtén los datos del producto a actualizar
    const productData = req.body;
    const { file } = req;

    // Verifica si se proporcionó una nueva imagen
    if (file) {
      // Construye la URL de la imagen
      const imageUrl = `${host}:${port}/public/${file.filename}`;

      // Actualiza la URL de la imagen en el producto
      productData.imgUrl = imageUrl;
    }

    // Actualiza el producto en la base de datos
    const updatedProduct = await Product.findByIdAndUpdate(productId, productData);

    if (!updatedProduct) {
      return res.status(404).send({ message: 'Producto no encontrado.' });
    }

    res.status(200).send({ message: `Producto con el ID: ${productId} fue editado correctamente.` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  addProduct,
  getProducts,
  deleteProducts,
  editionProducts
}