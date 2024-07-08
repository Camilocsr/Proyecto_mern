const mongoose = require('mongoose');

async function connectDB(db,host,port,dbName) {
  try {
    const uri = `${db}://${host}:${port}/${dbName}`
    await mongoose.connect(uri, {useNewUrlParser: true})
    console.log(`Conectado a la base de datos CSR👌 sin errores`)
  } catch (error) {
    console.error(`Error al conectarse a la base de datos en ${uri}`, error)
  }
}

module.exports = connectDB;