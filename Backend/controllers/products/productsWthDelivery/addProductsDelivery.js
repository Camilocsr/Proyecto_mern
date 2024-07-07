const productsWithDelivery = require('../../../models/productsWithDelivery.js');

async function addProductForDelivery(req, res) {
    try {
        const {
            nameClient,
            numberContact,
            email,
            address,
            description,
            numberProducts,
            productsList,
            delivery
        } = req.body;

        const newProduct = new productsWithDelivery({
            nameClient,
            numberContact,
            email,
            address,
            description,
            numberProducts,
            productsList,
            delivery
        });

        const productStored = await newProduct.save();

        res.status(200).send({ productStored });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { addProductForDelivery };