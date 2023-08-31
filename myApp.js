const { json } = require('body-parser');
let express = require('express');
const path = require('path');
let app = express();
require('dotenv').config()
console.log("Hello World");

const publicFolderPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicFolderPath));

app.get('/json', (req, res) => {
    const jsonResponse = {
        message: 'Hello json'
      };
      
      res.json(jsonResponse);
      });

app.get("/json",(rep,rep)=>{
    if(process.env.MESSAGE_STYLE ==="uppercase"){
        response = "Hello json".toUpperCase();
    }else{
        response ="Hello Json";
    }
    res,json ({"message":"Hello json"})
})






























 module.exports = app;
