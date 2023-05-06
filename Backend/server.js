require('dotenv');//variables de entorno.
const connectDB = require('./db/mongodb')
const { port, DB,DB_HOST, DB_PORT, DB_NAME } = require('./config');
const app = require('./app')

async function startServer() {// hago el control de errores con tryCach en una funcion asincrona.(si facha la conexion a db truena todo)
    try {
      await connectDB(DB,DB_HOST,DB_PORT,DB_NAME);
    
      app.listen(port, () => {
        console.log(`Queda iniciado el servidor CSR😁👌 en el puerto ${port}`);
      });
    } catch (error) {
      console.error(`Error al inicializar todo tu server: ${error}`);
      process.exit(0)
    }
  }
  
  startServer();