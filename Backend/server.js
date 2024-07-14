require('dotenv');
const connectDB = require('./services/db/mongodb.js')
const { port, DB,DB_HOST, DB_PORT, DB_NAME } = require('./config');
const app = require('./app')



async function startServer() {
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