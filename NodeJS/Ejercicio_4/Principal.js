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
    var nombre=req.body.nombre;  
    var edad=req.body.edad;
    console.log(nombre+" tiene "+edad+" años.");
    edad=edad*2;
    res.send('El doble de la edad de '+nombre+" es "+edad);
});
//-Listener-----------------------------------------------------
app.listen(Port, () =>{console.log("Express in port "+Port);});
//--------------------------------------------------------------
