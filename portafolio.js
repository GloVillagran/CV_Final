const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura SendGrid con tu API Key
sgMail.setApiKey('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');

// Ruta para manejar el envío del formulario
app.post('/enviar-correo', (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const msg = {
    to: 'glo.villagran@gmail.com', 
    from: correo,
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Correo enviado');
      res.status(200).send('Correo enviado con éxito');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error al enviar el correo');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
