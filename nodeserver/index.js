const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 5000;

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
    service: 'gmail',

    auth: {
      user: 'kalfreightgroup@gmail.com',
      pass: 'Kal#@09876',
    },
  });

  var mailOptions = {
    from: data.email,
    to: 'kalfreightgroup@gmail.com',
    subject: 'Contact Form Submission"',
    html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`,
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
