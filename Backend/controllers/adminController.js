const Admin = require('../models/Admin');

async function addAdmin(req,res) {
  try {
    const {
      nameAdmin,
      paswordAdmin
    } = req.body

    const admin = ({
      nameAdmin,
      paswordAdmin
    })

    const adminStored = await Admin.create(admin);
    res.status(200).send({adminStored});
  } catch (error) {
    res.status(500).send({message:error.message});
  }
}

async function getAdmin (req,res) {
  try {
    const admin = await Admin.find().lean().exec();
    res.status(200).send({admin});
  } catch (error) {
    console.log(`He tenido un error al traer los datos de los administradores.`,error)
  }
}

module.exports = {
  addAdmin,
  getAdmin
};