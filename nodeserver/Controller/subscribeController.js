const nodemailer = require('nodemailer');
const path = require('path');
const { google } = require('googleapis');
const subscribe = async (req, res) => {
  var data = req.body;
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, './keys.json), 
    I//the key file
    //url to spreadsheets API
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });
  const authClientObject = await auth.getClient();
  // app.post('/stats', upload.single('uploaded_file'), function (req, res) {
  //   // req.file is the name of your file in the form above, here 'uploaded_file'
  //   // req.body will hold the text fields, if there were any
  //   console.log(req.file, req.body);
  // });
  const googleSheetsInstance = google.sheets({
    version: 'v4',
    auth: authClientObject,
  });
  const spreadsheetId = '1dOoyOurqpJtcvqtd3A7oxzElE-21-a8Bsec_HHQvAXY';
  //write data into the google sheets
  await googleSheetsInstance.spreadsheets.values.append({
    auth, //auth object
    spreadsheetId, //spreadsheet id
    range: 'Sheet1!A:B', //sheet name and range of cells
    valueInputOption: 'USER_ENTERED', // The information will be passed according to what the usere passes in as date, number or text
    resource: {
      values: [['Email', data.Email]],
    },
  });
};

module.exports = {
  subscribe,
};
