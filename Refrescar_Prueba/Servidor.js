//-módulos
const express = require("express");
const app = express();
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const puerto = process.env.PORT; //Importante para correr Heroku process.env.PORT + en json //"node ./Servidor.js"
const path=require('path');


//-Motor de plantillas
app.set('view engine', 'ejs');
app.set()
app.set('views' ,'/app/views'); //'/app/views'__dirname+'/views'
app.use(express.static("/app/public"))

//-Páginas
app.get('/', (req,res)=>{
    var Caja=req.body.Caja;
    res.render("index", {Estado:Caja})
});
app.post('/', (req,res)=>{
    var Caja=req.body.Caja;
    res.render("index", {Estado:Caja})
});
//-Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express en puerto "+puerto);
});