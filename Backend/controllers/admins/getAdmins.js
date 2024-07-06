const Admin = require('../../models/Admin');

async function getAdmin(req, res) {
    try {
        const admin = await Admin.find().lean().exec();
        res.status(200).send({ admin });
    } catch (error) {
        console.log('He tenido un error al traer los datos de los administradores.', error);
    }
}

module.exports = {getAdmin}