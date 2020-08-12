// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  console.log(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "pretoriasmith@gmail.com",
    from: "pretoriasmith@gmail.com",
    subject: "homepage-sgolbert: Message from " + req.body.name,
    html: `<h2>Message from ${req.body.email}</h2><p>${req.body.message}</p>`,
  };

  try {
    sgMail.send(msg);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

  console.log("done");

  res.send("done!");
};
