//-Inicialización-----------------------------------------------
const express = require("express");
const app = express();
const Port = 80;
//-Módulo-para-juntar-palabras-y-crear-rutas--------------------
const path = require('path');
//-Extraer-información-de-solicitudes---------------------------
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
//-Request-Response---------------------------------------------
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/formulario.html'))
});
//-POST---------------------------------------------------------
app.post('/', (req,res) => {
    var mensaje=req.body.msn;  //--msn-es-el-"name"-del-<input>-
    console.log(mensaje);
    res.send('El mensaje era '+mensaje);
});
//-Listener-----------------------------------------------------
app.listen(Port, () =>{console.log("Express in port "+Port);});
//--------------------------------------------------------------
