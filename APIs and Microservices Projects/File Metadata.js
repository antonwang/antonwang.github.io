var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

////HINT: You can use the multer npm package to handle file uploading.
let multer = require('multer');

//user story #1: You can submit a form that includes a file upload.
//https://www.npmjs.com/package/multer
app.post('/api/fileanalyse',multer().single('upfile'), (request, response) => {
  console.log(request.file)
  response.json({})
})

//user story #2: The form file input field has the name attribute set to upfile.

//user story #3: When you submit a file, you receive the file name, type, and size in bytes within the JSON response.