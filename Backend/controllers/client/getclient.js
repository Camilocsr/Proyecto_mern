const Client = require('../../models/client.js');

async function getClient(req, res) {
    try {
        const clients = await Client.find().lean().exec();
        res.status(200).send({ clients });
    } catch (error) {
        console.error('He tenido un error al traer los datos de los Clients.', error);
        res.status(500).send({ message: 'Error al traer los datos de los Clients.' });
    }
}

module.exports = { getClient };