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
    },
    aws:{
        AWS_ACCESS_KEY_ID:process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY:process.env.AWS_SECRET_ACCESS_KEY,
        AWS_REGION:process.env.AWS_REGION,
        AWS_BUCKET_NAME:process.env.AWS_NAME_BUKED_S3
    },
    googleClaud:{
        ID_CLIENTE:process.env.ID_CLIENTE,
        SECRET_CLIENTE:process.env.SECREED_CLIENT,
        REFRECH_TOKEN:process.env.REFRECH_TOKEN,
        configuracionEnvioDeCorreo:{
            CorreoReseptor:process.env.CORREO_RESEPTOR,
            CorreoEmisor:process.env.CORREO_EMISOR
        }
    }
}

module.exports = {
    host:config.appConfig.host,
    port: config.appConfig.port,
    DB:config.db.DB,
    DB_NAME:config.db.DB_NAME,
    DB_PORT:config.db.DB_PORT,
    DB_HOST:config.db.DB_HOST,
    AWS_ACCESS_KEY_ID:config.aws.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY:config.aws.AWS_SECRET_ACCESS_KEY,
    AWS_REGION:config.aws.AWS_REGION,
    AWS_BUCKET_NAME:config.aws.AWS_BUCKET_NAME,
    ID_CLIENTE:config.googleClaud.ID_CLIENTE,
    SECRET_CLIENTE:config.googleClaud.SECRET_CLIENTE,
    REFRECH_TOKEN:config.googleClaud.REFRECH_TOKEN,
    CorreoEmisormisor:config.googleClaud.configuracionEnvioDeCorreo.CorreoEmisor,
    CorreoReseptor:config.googleClaud.configuracionEnvioDeCorreo.CorreoReseptor
};