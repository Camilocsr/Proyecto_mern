const bcrypt = require('bcrypt');
const Admin = require('../../models/Admin');

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

module.exports = {addAdmin}