//-Módulo-Express--------------------------------------------------
const express = require("express");
const app=express();
//-Port------------------------------------------------------------
const Port=80;
//-Request-Response------------------------------------------------
app.get('/', (req,res)=>{
    res.send("Utilización de Express")
});

app.get('/Path1', (req,res)=>{
    res.send("Path1")
});
//-Listener--------------------------------------------------------
app.listen(Port, () => {
    console.log("Ejecutando Express en el puerto "+Port);
});
//-----------------------------------------------------------------