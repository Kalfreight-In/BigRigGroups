const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const emailMessage = require('./Routes/emailMessage');
const UploadImage = require('./Routes/uploadImage');
const subscribe = require('./Routes/subscribe');

const port = process.env.PORT || 5000;

const { Storage } = require('@google-cloud/storage');
const path = require('path');
const Multer = require('Multer');
const { format } = require('path');

const { smtpTransport } = require('./variable/Transport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1', emailMessage);
app.use('/api/upload', UploadImage);
app.use('/api/subscribe', subscribe);

// const multer = Multer({
//   storage: Multer.memoryStorage(),
//   limits: {
//     fileSize: 25 * 1024 * 1024, // no larger than 5mb, you can change as needed.
//   },
// });
// const googleStorage = new Storage({
//   keyFilename: path.join(__dirname, './kal-partz-d9e09365fa43.json'),
//   projectId: 'kal-partz',
// }); // add the bucket name - the bolded bit is what is supposed to be

// googleStorage.getBuckets().then((x) => console.log(x));
// const bucket = googleStorage.bucket('kalgroup_files');
// app.post('/load', multer.single('file'), (req, res) => {
//   var RealPath = '';

//   var data = req.body;

//   try {
//     if (!data.file) {
//       return res.status(400).send({ message: `Please upload a file! ${data}` });
//     }

//     const blob = bucket.file(data.file.originalname);
//     const blobStream = blob.createWriteStream({
//       resumable: false,
//     });

//     blobStream.on('error', (err) => {
//       res.status(500).send({ message: err.message });
//     });

//     // console.log(`data is ${data.name}`);

//     blobStream.on('finish', async (data) => {
//       // create a url to access file

//       const publicURL = format({
//         path: `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
//       });
//       RealPath = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
//       try {
//         await bucket.file(data.file.originalname).makePublic();
//       } catch {
//         return res.status(500).send({
//           message: `Uploaded the file successfully: ${data.file.originalname}`,
//           url: publicURL.path,
//         });
//       }

//       console.log(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
//       res.status(200).send({
//         message: 'Uploaded the file successfully: ' + data.file.originalname,
//         url: `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
//       });
//     });

//     blobStream.end(data.file.buffer);
//   } catch (err) {
//     if (err.code === 'LIMIT_FILE_SIZE') {
//       return res.status(500).send({
//         message: 'File size cannot be larger than 25MB!',
//       });
//     }

//     res.status(500).send({
//       message: `Could not upload the file: ${data.file.originalname}. ${err}`,
//     });
//   }
//   var mailOptions = {
//     from: data.email,
//     to: () => {
//       if (data.site.includes('@')) {
//         return data.site;
//       }
//       if (data.site === 'kalgroup') {
//         return 'info@kalgroup.com';
//       } else {
//         return 'info@bigrigcanada.com';
//       }
//     },

//     bcc: ['pkumar@kalfreight.com', 'ssoam@kalfreight.com'],
//     subject: 'Contact Form Submission"',
//     html: `<p>Name:${data.name}</p>
//               <p>Email:${data.email}</p>
//               <p>Phone no:${data.phoneno}</p>
//               <p>message:${data.message}</p>
//               <p>location:${data.location}</p>
//               `,
//     attachments: [
//       {
//         path: RealPath,
//       },
//     ],
//   };

//   smtpTransport.sendMail(mailOptions, (error, response) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send('Success');
//     }
//     smtpTransport.close();
//   });
// });

app.listen(port, () => {
  console.log(`app Started on ${port}`);
});
