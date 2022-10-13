const nodemailer = require('nodemailer');
const smtpTransport = nodemailer.createTransport({
  // Host: 'smtp.office365.com',

  // Port: 587,

  // auth: {
  //   user: 'noreply@kalgroup.com',
  //   pass: 'Xoc00360',
  // },
  // tls: {
  //   ciphers: 'SSL',
  // },
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'kalfreightgroup@gmail.com',
    pass: 'qszaswknsvaicxju',
  },
});

module.exports = { smtpTransport };
