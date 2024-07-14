const Client = require('../../models/client.js');

async function deleteClient(req, res) {
    try {
        const clientId = req.params.id;

        const deletedClient = await Client.findByIdAndDelete(clientId);

        if (!deletedClient) {
            return res.status(404).send({ message: 'Cliente no encontrado' });
        }

        res.status(200).send({ message: 'Cliente eliminado exitosamente' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {deleteClient}