let express = require('express');
const path = require('path');
let app = express();
console.log("Hello World");

const publicFolderPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicFolderPath));

app.get('/json', (req, res) => {
    const jsonResponse = {
        message: 'Hello json'
      };
      
      res.json(jsonResponse);
  });
































 module.exports = app;
