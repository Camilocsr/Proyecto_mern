const path = require('path');
const Product = require('../../models/Product.js');
const { uploadFile } = require('../../services/AWS/fileUpload.js');

async function addProduct(req, res) {
    try {
        const {
            name,
            size,
            unitaryPrice,
            description,
            categoria
        } = req.body;

        let imgUrl = null;
        if (req.file) {
            const ubicacionIMG = path.join(__dirname, '..', '..', 'storage', 'imgs', req.file.filename);
            const fileUrl = await uploadFile(ubicacionIMG);
            imgUrl = fileUrl;
        }

        const product = {
            name,
            size,
            unitaryPrice,
            description,
            categoria,
            imgUrl
        };

        const productStored = await Product.create(product);
        res.status(200).send({ productStored });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {addProduct};