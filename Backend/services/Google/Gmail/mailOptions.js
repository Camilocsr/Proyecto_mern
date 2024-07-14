const enviarCorreo = require("./mensajeria");

const enviarCorreoPorGmail = (Emisor, Reseptor, Asunto, Message) => {
    const mailOptions = {
        from: Emisor,
        to: Reseptor,
        subject: Asunto,
        text: Message
    };

    enviarCorreo(mailOptions);
}


module.exports = enviarCorreoPorGmail;