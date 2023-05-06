const multer = require('multer'); // esta funcion esta en la documentacion de multer(yo no la hice).

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storage/imgs');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const extension = file.originalname.split('.').pop();
        cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;