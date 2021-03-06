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
//user story #2: The form file input field has the name attribute set to upfile.
//user story #3: When you submit a file, you receive the file name, type, and size in bytes within the JSON response.

//https://www.npmjs.com/package/multer
//multer().single(fieldname) - accepts a single file with the name fieldname. The single file will be stored in req.file.
app.post('/api/fileanalyse', multer().single('upfile'), (request, response) => {
  //console.log(request.file)  - to view the object in request.file
  response.json({
    name: request.file.originalname,
    type: request.file.mimetype,
    size: request.file.size
  })
})

//example JSON response: {"name":"Baby Guide.pdf","type":"application/pdf","size":4489942}