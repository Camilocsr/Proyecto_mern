const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../../models/Admin');

async function authenticateAdmin(req, res) {
    try {
        const { nameAdmin, paswordAdmin } = req.body;

        const admin = await Admin.findOne({ nameAdmin });

        if (!admin) {
            return res.status(404).json({ message: 'Administrador no encontrado' });
        }

        const passwordMatch = await bcrypt.compare(paswordAdmin, admin.paswordAdmin);

        console.log('Contraseña almacenada en la base de datos:', admin.paswordAdmin);
        console.log('¿Coinciden las contraseñas cifradas?', passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ adminId: admin._id }, 'secreto', { expiresIn: '1h' });

        res.status(200).json({ message: 'Autenticación exitosa', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {authenticateAdmin}