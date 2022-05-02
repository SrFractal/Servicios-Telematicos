console.clear();
//-Modulos-------------------------------------------------------
const {Nombres,Edad,Salidas,Tiempo} = require('./Informacion');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
//-Variables-----------------------------------------------------
//-Visualizar----------------------------------------------------
function Visualizar(){
console.clear();
console.log("----Usuarios----");
for(var i=1;i<=Nombres.length;i++){
    console.log(i+".  "+Nombres[i-1]);
}

readline.question('Elija un usuario: ', input=>{
    input=input-1;
    console.clear();
    console.log("Bienvenid@ "+Nombres[input]);
    console.log("Sus datos son: \nEdad: "+Edad[input]+"\nSales "+Salidas[input]+" veces al día");
    console.log("Haces "+Tiempo[input]+" de actividad física al día");
    console.log("Sigue así !!!")
    readline.close();
});
}
//-Main---------------------------------------------------------
Visualizar();

