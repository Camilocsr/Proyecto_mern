const mongoose = require('mongoose');
const Client = require('../../models/client.js');
const Order = require('../../models/pedidos.js');

async function addOrder(req, res) {
    try {
        const { clientId, productList } = req.body;

        if (!mongoose.Types.ObjectId.isValid(clientId)) {
            return res.status(400).send({ message: 'El ID del cliente no es válido.' });
        }

        const existingClient = await Client.findById(clientId);
        if (!existingClient) {
            return res.status(404).send({ message: 'Cliente no encontrado.' });
        }

        const newOrder = new Order({
            clientId,
            productList
        });

        const orderStored = await newOrder.save();

        res.status(200).send({ orderStored });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { addOrder };