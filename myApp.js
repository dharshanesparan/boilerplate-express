
let express = require('express');
const path = require('path');
app.get (express.static(__dirname+"public"))
let app = express();
//
//console.log("Hello World");
app.get('/',(req,res)=>{res.sendFile(__dirname+'views.index.html');
  })
const publicFolderPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicFolderPath));

app.get('/json', (req, res) => {
    const jsonResponse = {
        message: 'Hello json'
      };
      
      res.json(jsonResponse);
      });
      if (process.env.MESSAGE_STYLE=='uppercase'){
        app.get('/json', function(req, res) {
          res.json({ "message": "HELLO JSON" })
        }); 
      }
      else {
        app.get('/json', function(req, res) {
        res.json({ "message": "Hello json" })
      }); 
      
      }
      




























 module.exports = app;
