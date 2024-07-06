const Product = require('../../models/Product');

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

module.exports = {editionProducts}