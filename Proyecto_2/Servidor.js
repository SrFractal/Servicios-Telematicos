//-módulos
const express = require("express");
const app = express();
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const puerto = process.env.PORT; //Importante para correr Heroku process.env.PORT + en json //"node ./Servidor.js"
const {Inventario, Informacion, Imagen} = require('./inv');
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
//-Páginas
app.get('/', (req,res)=>{
    Listar();
    res.render("catalogo", {titulo:"Proyecto_2.",
    A:A, 
    Producto:Inventario,
    nombre:Inventario[valor], 
    descripcion: Informacion[valor],
    Imagen:Imagen[valor]})
    
    A=1;
});

app.get('/nuevo_producto', (req,res)=>{
    Listar();
    res.render("formulario", {titulo:"Proyecto_2.",
    A:A, 
    Producto:Inventario,
    nombre:'',
    descripcion:'',
    Imagen:''})
    
    A=1;
});
//-Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express en puerto "+puerto);
});
//-Post
app.post('/', (req,res) => {
    Listar();
    var valor=req.body.valor; 
    res.render("catalogo", {titulo:"Proyecto_2",
    A:A, 
    Producto:Inventario,
    nombre:Inventario[valor], 
    descripcion: Informacion[valor],
    Imagen:Imagen[valor]})
    A=1;
});
app.post('/nuevo_producto', (req,res) => { 
    
    var nombre=req.body.nombre
    var mensaje=req.body.mensaje
    var archivo=req.file.originalname
    Inventario[Inventario.length]=nombre;
    Informacion[Informacion.length]=mensaje;
    Imagen[Imagen.length]=archivo;
    Listar();
    valor=A-1;
    res.render("catalogo", {titulo:"Proyecto_2",
    A:A, 
    Producto:Inventario,
    nombre:Inventario[valor], 
    descripcion: Informacion[valor],
    Imagen:Imagen[valor]})
    A=1;
});