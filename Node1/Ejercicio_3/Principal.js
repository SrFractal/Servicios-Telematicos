//-Modulo-HTTP-----------------------------------------------------
const http = require("http");
const servidor = http.createServer;
const yosay = require('yosay');
//-Requests-&-Response---------------------------------------------
const server = http.createServer((req,res)=>{
    res.end(yosay('Omar Andrés Díaz Peláez'));
});
//-Port------------------------------------------------------------
const Port = 80;
//-Listener--------------------------------------------------------
server.listen(Port, ()=>{
    console.log("El servidor está corriendo en el puerto "+ Port);
});
//-----------------------------------------------------------------