// Imports the Google Cloud client library
const Transport = require('../variable/Transport');
const { Storage } = require('@google-cloud/storage');
const path = require('path');
const Multer = require('Multer');
const { format } = require('path');

// Creates a client
const googleStorage = new Storage({
  keyFilename: path.join(__dirname, '../kal-partz-d9e09365fa43.json'),
  projectId: 'kal-partz',
}); // add the bucket name - the bolded bit is what is supposed to be

googleStorage.getBuckets().then((x) => console.log(x));
const bucket = googleStorage.bucket('kalgroup_files');
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 25 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

const sendingResume = (req, res) => {
  var RealPath = '';
  var upload = multer.single('file');
  // console.log(`data is ${data.name}`);
  upload(req, res, function (err) {
    try {
      if (!req.file) {
        return res.status(400).send({ message: 'Please upload a file!' });
      }

      const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream({
        resumable: false,
      });

      blobStream.on('error', (err) => {
        res.status(500).send({ message: err.message });
      });

      blobStream.on('finish', async (data) => {
        // create a url to access file
        const publicURL = format({
          path: `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
        });
        RealPath = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        try {
          await bucket.file(req.file.originalname).makePublic();
        } catch {
          return res.status(500).send({
            message: `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
            url: publicURL.path,
          });
        }
        console.log(`${publicURL.path}`);
        res.status(200).send({
          message: 'Uploaded the file successfully: ' + req.file.originalname,
          url: `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
        });
      });
      blobStream.end(req.file.buffer);
    } catch (err) {
      if (err.code == 'LIMIT_FILE_SIZE') {
        return res.status(500).send({
          message: 'File size cannot be larger than 25MB!',
        });
      }

      res.status(500).send({
        message: `Could not upload the file: ${req.file.originalname}. ${err}`,
      });
    }
  });

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

    attachments: [
      {
        path: RealPath,
      },
    ],
  };

  Transport.smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send('Success');
    }
    Transport.smtpTransport.close();
  });
};

// module.exports = {
//   googleStorage,
// };

module.exports = {
  sendingResume,
};
