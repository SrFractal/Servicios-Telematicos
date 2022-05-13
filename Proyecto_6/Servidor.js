//-módulos------------------------------------------------------------------------------------------------
const express = require("express");
const app = express();
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const puerto = 5000; //Importante para correr Heroku process.env.PORT + en json //"node ./Servidor.js"
//var {Cartas} = require('./Random');
const IMG_DIR = __dirname + '/public/img/';
const path=require('path');
//-Motor de plantillas
app.use('/img', express.static(IMG_DIR));
app.set('view engine', 'ejs');
app.set()
app.set('views' ,__dirname+'/views'); //'/app/views'__dirname+'/views'
app.use(express.static(__dirname + '/public'))
//-Función Shuffle-https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array-
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
var Match="0";
var Puntaje="0";
var sel="1";
var Done="";
var CajaID="";
var CartaID="";
//-Cartas------------------------------------------------------------------------------------------------
Cartas=[
    1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12
];
//shuffle(Cartas);
//-GET---------------------------------------------------------------------------------------------------
//-INICIO------------------------------------------------------------------------------------------------
app.get('/', (req,res)=>{
    res.render("Menu", {  });
});
//-1-PLAYER----------------------------------------------------------------------------------------------
app.get('/1-player', (req,res)=>{
    shuffle(Cartas);
    console.log(Cartas);
    res.render("SinglePlayer", { Cartas });
});
//-MULTI-PLAYER------------------------------------------------------------------------------------------

app.get('/multiplayer', (req,res)=>{
    shuffle(Cartas);
    var Match="0";
    var Puntaje="0";
    var sel="1";
    var Done="";
    var CajaID="";
    var CartaID="";
    console.log(Cartas);
    res.render("Multiplayer", { Cartas, Match, Puntaje, sel, Done, CajaID, CartaID } );
});

//-Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express en puerto "+puerto);
});

app.listen(puerto+1, () => {
    console.log("Ejecutando express en puerto "+puerto);
});
//-Post--------------------------------------------------------------------------------------------------
app.post('/multiplayer', (req,res) => {
    Match=req.body.Match;
    Puntaje=req.body.Puntaje;
    sel=req.body.sel;
    Done=req.body.Done;         Done=Done.split(",");
    CajaID=req.body.CajaID;     CajaID=CajaID.split(",");
    CartaID=req.body.CartaID;   CartaID=CartaID.split(",");
    console.log(CartaID);
    console.log(CajaID);
    console.log(Done);
    console.log(sel);
    res.render("Multiplayer", { Cartas, Match, Puntaje, sel, Done, CajaID, CartaID });
});

