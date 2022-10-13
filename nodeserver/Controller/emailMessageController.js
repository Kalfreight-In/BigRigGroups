const nodemailer = require('nodemailer');
const { smtpTransport } = require('../variable/Transport');
const sendingMessages = (req, res) => {
  var data = req.body;
  // console.log(`data is ${data.name}`);

  var mailOptions = {
    from: data.email,
    to: () => {
      if (data.site.includes('@')) {
        return data.site;
      }
      if (data.site === 'kalgroup') {
        return 'info@kalgroup.com';
      } else {
        return 'info@bigrigcanada.com';
      }
    },

    bcc: ['pkumar@kalfreight.com', 'ssoam@kalfreight.com'],
    subject: 'Contact Form Submission"',
    html: `<p>Name:${data.name}</p>
              <p>Email:${data.email}</p>
              <p>Phone no:${data.phoneno}</p>
              <p>message:${data.message}</p>
              <p>location:${data.location}</p>
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
};

module.exports = {
  sendingMessages,
};
