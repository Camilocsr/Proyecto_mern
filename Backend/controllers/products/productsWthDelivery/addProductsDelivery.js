const { CorreoEmisormisor, CorreoReseptor } = require('../../../config.js');
const enviarCorreoPorGmail = require('../../../services/Google/Gmail/mailOptions.js');
const productsWithDelivery = require('../../../models/productsWithDelivery.js');
const mensajeAEnviar = require('../../../services/Google/Gmail/messageAEnviar.js');

async function addProductForDelivery(req, res) {
    const Emisor = CorreoEmisormisor;
    const Receptor = CorreoReseptor;
    const Asunto = 'Pedido contra entrega';
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
        const Message = mensajeAEnviar(nameClient,numberContact,email,address,description,numberProducts,productsList);
        
        enviarCorreoPorGmail(Emisor, Receptor, Asunto, Message);
        

        res.status(200).send({ productStored });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { addProductForDelivery };