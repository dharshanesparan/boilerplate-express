
const { json } = require('body-parser');
let express = require('express');
const path = require('path');
require('dotenv').config()
//app.get (express.static(__dirname+"public"))
let app = express()
 //console.log('${process.env.MESSAGE_STYLE} ${process.env.MESSAGE_STYLE} ')
//
console.log("Hello World");
app.get('/',(req,res)=>{res.sendFile(__dirname+'views.index.html');
  }),

app.use(express.static(__dirname + "public"));
  app.use('/public', express.static(__dirname + "public"));

app.get("/json",function(req,res){

  console.log(process.env.MESSAGE_STYLE,"<= message style")
   if(process.env.MESSAGE_STYLE ==="uppercase"){
    res.json ({"message":"Hello json "});

   }else{
    res.json({"message":"Hello json"});
   }
});
app.get("/", (request, response) => {
  let absolutePath = __dirname + "/views/index.html";
  response.sendFile(absolutePath);
});
app.use (express.static(__dirname + "publiic"));

//let massage ={message:"Hello json"};
app.get("/json",(request, response) =>  {
  if(process.env.MESSAGE_STYLE === 'uppercase'){
     response.json({"message": "HELLO JSON"})
  }else {
 response.json(massage)
}
});
