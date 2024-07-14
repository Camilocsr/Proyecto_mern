const Product = require('../../models/Product.js');

async function deleteProducts(req, res) {
    try {
        const productId = req.params.id;

        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).send({ message: 'Producto no encontrado' });
        }

        res.status(200).send({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {deleteProducts}