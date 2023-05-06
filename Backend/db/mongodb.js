const mongoose = require('mongoose');

async function connectDB() {
  try {
    const uri = `mongodb://localhost:27027/store`
    await mongoose.connect(uri, {useNewUrlParser: true})
    console.log(`Conectado a la base de datos CSR👌 sin errores`)
  } catch (error) {
    console.error(`Error al conectarse a la base de datos en ${uri}`, error)
  }
}

module.exports = connectDB;