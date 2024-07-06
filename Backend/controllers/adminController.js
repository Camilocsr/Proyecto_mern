const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

async function addAdmin(req, res) {
  try {
    const { nameAdmin, paswordAdmin } = req.body;

    const hashedPassword = await bcrypt.hash(paswordAdmin, 10);

    const admin = {
      nameAdmin,
      paswordAdmin: hashedPassword
    };
    console.log(admin.paswordAdmin);
    const adminStored = await Admin.create(admin);
    res.status(200).send({ adminStored });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getAdmin(req, res) {
  try {
    const admin = await Admin.find().lean().exec();
    res.status(200).send({ admin });
  } catch (error) {
    console.log('He tenido un error al traer los datos de los administradores.', error);
  }
}

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

module.exports = {
  authenticateAdmin,
  addAdmin,
  getAdmin
};