const validate = require("../services/middleware/validation");
const nodemailer = require("nodemailer");

  //{ transporter } = require("./modules/transporter");

exports.validation = validate;

const transporter = nodemailer.createTransport({
    service: 'Godaddy',
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "kevin@laddboxkillarna.se",
      pass: "123456789",
    },
    //tls: {rejectUnauthorized: false},
    tls: {
      ciphers: "SSLv3",
    },

  });

exports.contact = async (req, res, err) => {
  console.log(req.body);

  const contactMailTemplate =
    "<html>\n\
    <body>\n\
    <p> Namn: " +
    req.body.email.name +
    "</p>\n\
    <p> Email: " +
    req.body.email.email +
    "</p>\n\
    <p> Ämne: " +
    req.body.email.subject +
    "</p>\n\
    <p> Meddelande: " +
    req.body.email.message +
    "</p>\n\
    </body>\n\
    </html>";

  const confirmationMailTemplate =
    "<html>\n\
    <body>\n\
    <h1>Tack för ditt meddelande</h1>\n\
    <h6>Vi återkommer inom 24 timmar</h6>\n\
    </body>\n\
    </html>";

    const mailList = ['alexander@laddboxkillarna.se', 'kevin@laddboxkillarna.se']

  let contactMail = {
    from: 'kevin@laddboxkillarna.se',
    to: mailList,
    subject: `Meddelande från ${req.body.email.email}`,
    html: contactMailTemplate,
  };

//   let confirmationMail = {
//     from: "User <username@domain.com>",
//     to: req.body.email.email,
//     subject: "your query on domain.com",
//     html: confirmationMailTemplate,
//   };

  await transporter.sendMail(contactMail, (err, info) => {
    if (err) {
      console.log(err);
      res.json(err)
    } 
    console.log(info);
    res.json("success");
  });

//   await transporter.sendMail(confirmationMail, (err, info) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Message %s sent: %s", info.messageId, info.response);
//   });

};
