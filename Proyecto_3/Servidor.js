//-módulos
const express = require("express");
const app = express();
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const puerto = process.env.PORT; //Importante para correr Heroku process.env.PORT + en json //"node ./Servidor.js"
var {Inventario, Precio, Imagen, Cantidad} = require('./inv');
const IMG_DIR = __dirname + '/public/img/';
const path=require('path');

const multer=require('multer');
const storage = multer.diskStorage({    destination:path.join(__dirname,'public/img/'),
filename: (req,file,cb) =>{
    cb(null, file.originalname)
}
});
var A=1;
var valor=1;
//-listar
function Listar(){
    for(var i=1;i<Inventario.length;i++){
        A++;
        
    }
}
//-Motor de plantillas
app.use('/img', express.static(IMG_DIR));
app.set('view engine', 'ejs');
app.set()
app.set('views' ,'/app/views'); //'/app/views'__dirname+'/views'
app.use(express.static("/app/public"))
app.use(multer({storage,dest: path.join(__dirname,'public/img/')}).single('archivo'));
//-INICIO-------------------------------------------------------------------------------------
app.get('/', (req,res)=>{
    Listar();
    res.render("index", {titulo:"Proyecto_3.",
    A:A, 
    Producto:Inventario,
    menu:"Inicio",Estado:1,
    });
    A=1;
});
//-CATALOGO----------------------------------------------------------------------------------
app.get('/catalogo', (req,res)=>{
    Listar();
    res.render("catalogo", {titulo:"Proyecto_3.",
    A:A, 
    Producto:Inventario,Precio,
    Imagen,Cantidad,
    menu:"Catálogo",Estado:2,
    });
    A=1;
});
//-INVENTARIO---------------------------------------------------------------------------------
app.get('/inventario', (req,res)=>{
    Listar();
    res.render("inventario", {titulo:"Proyecto 3",
    A:A, 
    Producto:Inventario,Precio,
    Imagen,Cantidad,
    menu:"Inventario",Estado:3,
});
    A=1;
});
//-Nuevo-Producto-----------------------------------------------------------------------------
app.get('/nuevo_producto', (req,res)=>{
    Listar();
    res.render("formulario", {titulo:"Proyecto 3",
    A:A, 
    menu:"Añadir", Estado:2,
});
    
    A=1;
});
//-Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express en puerto "+puerto);
});
//-Post---------------------------------------------------------------
app.post('/catalogo', (req,res) => {
    Listar();
    var X=req.body.var;
    Cantidad[X]=Cantidad[X]-1;
    console.log("Quedan "+Cantidad[X])
    res.render("catalogo", {titulo:"Proyecto 3",
    A:A, 
    Producto:Inventario,Precio,
    Imagen,Cantidad,
    menu:"Catálogo",Estado:2,
    });
    A=1;
});
app.post('/inventario', (req,res) => {
    Listar();
    AA=req.body.Inventario;
    BB=req.body.Precio;
    CC=req.body.Unidades;
    AA=AA.split(",");
    BB=BB.split(",");
    CC=CC.split(",");
    Inventario=AA;
    Precio=BB;
    Cantidad=CC;
    res.render("inventario", {titulo:"Proyecto 3",
    A:A, 
    Producto:Inventario,Precio,
    Imagen,Cantidad,
    menu:"Inventario",Estado:3,
});
    A=1;
});

app.post('/nuevo_producto', (req,res) => { 
    
    var nombre=req.body.nombre
    var mensaje=req.body.mensaje
    var archivo=req.file.originalname
    Inventario[Inventario.length]=nombre;
    Precio[Precio.length]=mensaje;
    Imagen[Imagen.length]=archivo;
    Cantidad[Cantidad.length]="0";
    Listar();
    valor=A-1;
    res.render("formulario", {titulo:"Proyecto 3",
    A:A, 
    menu:"Añadir", Estado:2,
});
    A=1;
});