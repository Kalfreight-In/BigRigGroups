const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log(`We are live on port  ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to my api');
});

app.post('/api/v1', (req, res) => {
  var data = req.body;
  console.log(`data is ${data.name}`);
  var smtpTransport = nodemailer.createTransport({
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

  var mailOptions = {
    from: data.email,
    to: 'info@bigrigcanada.com',
    bcc: ['pkumar@kalfreight.com', 'ssoam@kalfreight.com'],
    subject: 'Contact Form Submission"',
    html: `<p>Name:  ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Phone no: ${data.phoneno}</p>
          <p>message: ${data.message}</p>
          <p>location: ${data.location}</p>
          `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send('Success');
    }
    smtpTransport.close();
  });
});
