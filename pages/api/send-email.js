// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'pretoriasmith@gmail.com',
    from: 'pretoriasmith@gmail.com',
    subject: `homepage-sgolbert: Message from ${req.body.name}`,
    html: `<h2>Message from ${req.body.email}</h2><p>${req.body.message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent');
  }
};
