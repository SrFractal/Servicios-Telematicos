console.clear();
//-Inicialización-----------------------------------------------
const express = require("express");
const path = require('path');
const app = express();
const Port = 80;
const {Inventario, Informacion} = require('./Inv');
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
Datos="";
Datos2="";
Impar="";
Par="";
var A= 1;
//--------------------------------------------------------------
function Listar(){
    for(var i=1;i<Inventario.length;i++){
        Datos=Datos+i+". "+Inventario[i]+'\n';
        A++;
    }
    for(var i=Inventario.length-1;i>0;i--){
        Datos2=Datos2+i+". "+Inventario[i]+'\n';
    }
    for(var i=1;i<Inventario.length;i=i+2){
        Impar=Impar+i+". "+Inventario[i]+'\n';
    }
    for(var i=2;i<Inventario.length;i=i+2){
        Par=Par+i+". "+Inventario[i]+'\n';
    }
}
A=String(A);
//-Request-Response---------------------------------------------
app.get('/', (req,res) => {
    Listar();
    res.render('Main.html',{A:A});
    Datos=""; Par=""; Impar=""; A=1; Datos2="";
});

app.get('/Inventario', (req,res) => {
    Listar();
    res.render('Inventario_Sort.html',{Inventario:Datos});
    Datos=""; Par=""; Impar=""; A=1; Datos2="";
});

app.get('/Inventario/Ascendente', (req,res) => {
    Listar();
    console.clear();
    console.log(Datos);
    res.render('Inventario_Sort.html',{Inventario:Datos});
    Datos=""; Par=""; Impar=""; A=1; Datos2="";
});

app.get('/Inventario/Descendente', (req,res) => {
    Listar();
    console.clear();
    console.log(Datos2);
    res.render('Inventario_Sort.html',{Inventario:Datos2});
    Datos=""; Par=""; Impar=""; A=1; Datos2="";
});

app.get('/Par', (req,res) => {
    Listar();
    res.render('Inventario.html',{Inventario:Par});
    Datos=""; Par=""; Impar=""; A=1; Datos2="";
});

app.get('/Impar', (req,res) => {
    Listar();
    res.render('Inventario.html',{Inventario:Impar});
    Datos=""; Par=""; Impar=""; A=1; Datos2="";
});
//-POST---------------------------------------------------------
app.post('/', (req,res) => {
    console.clear();
    var B=req.body.Var; 
    console.log(B+". "+Inventario[B]+":\n"+Informacion[B]);
});

app.post('/Nuevo', (req,res) => {
    console.clear();
    Inventario[Inventario.length]=req.body.Nueva;
    Informacion[Informacion.length]=req.body.Info;
    Listar();
    res.render('Main.html',{A:A});
    Datos=""; Par=""; Impar=""; A=1; Datos2="";
});
//-Listener-----------------------------------------------------
app.listen(Port, () =>{console.log("Express in port "+Port);});
//--------------------------------------------------------------
