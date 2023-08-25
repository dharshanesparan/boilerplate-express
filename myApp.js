let express = require('express');
const path = require('path');
let app = express();
console.log("Hello World");

const publicFolderPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicFolderPath));

app.get('/', (req, res) => {
    absolutePath = __dirname + '/public/style.css'
    res.sendFile(absolutePath);
  });
































 module.exports = app;
