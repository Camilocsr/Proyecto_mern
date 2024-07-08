const Product = require('../../models/Product.js');

async function getProducts(req, res) {
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

module.exports = {getProducts}