const bcrypt = require('bcrypt');
const Client = require('../../models/client.js');

async function addClient(req, res) {
    try {
        const { nameClient, surnameClient, city,emailClient,phone,address,password} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const client = {
            nameClient,
            surnameClient,
            city,
            emailClient,
            phone,
            address,
            password: hashedPassword
        };

        const clientStored = await Client.create(client);
        res.status(200).send({ clientStored });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {addClient}