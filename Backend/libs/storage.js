const multer = require('multer');// funcion la cual valida si es un archivo tipo imagen, si no lo es nunca llegara a la base de datos.

const storage = multer.diskStorage({ //manejo las imagenes en el servidor...
  destination: function (req, file, cb) {
    cb(null, './storage/imgs');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = file.originalname.split('.').pop();
    cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no permitido. Solo se permiten archivos de imagen.'));
    }
  },
});

module.exports = upload;