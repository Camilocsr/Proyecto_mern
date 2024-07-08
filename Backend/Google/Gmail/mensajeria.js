const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const { ID_CLIENTE, SECRET_CLIENTE, REFRECH_TOKEN } = require('../../config.js');

const oauth2Client = new OAuth2(
    ID_CLIENTE,
    SECRET_CLIENTE,
    'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
    refresh_token: REFRECH_TOKEN
});

const getAccessToken = () => {
    return new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'esmunred@gmail.com',
        clientId: ID_CLIENTE,
        clientSecret: SECRET_CLIENTE,
        refreshToken: REFRECH_TOKEN,
        accessToken: getAccessToken()
    }
});

const enviarCorreo = (mailOptions) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo:', error.message);
                reject(error);
            } else {
                console.log('Correo enviado:', info.response);
                resolve(info);
            }
        });
    });
};

module.exports = enviarCorreo;