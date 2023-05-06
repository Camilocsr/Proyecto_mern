require('dotenv').config();
const config = {
    appConfig:{
        host: process.env.APP_HOST,
        port: process.env.APP_PORT
    },
    db:{
        DB:process.env.DB,
        DB_NAME:process.env.DB_NAME,
        DB_PORT:process.env.DB_PORT,
        DB_HOST:process.env.DB_HOST
    }
}

module.exports = {
    host:config.appConfig.host,
    port: config.appConfig.port,
    DB:config.db.DB,
    DB_NAME:config.db.DB_NAME,
    DB_PORT:config.db.DB_PORT,
    DB_HOST:config.db.DB_HOST
};