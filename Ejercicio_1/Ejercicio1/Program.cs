//----------------------------------------------------------------
Console.Clear();
//-Variables------------------------------------------------------
int[,] Matriz = new int [,] 
{
    {0,0,0},
    {0,0,0},
    {0,0,0}
};
string Texto="";
while (true){
Console.Clear();
Console.WriteLine("Bienvenido a multipliación de matriz.\n Seleccione la fila 1, 2 o 3");
string Seleccion=Console.Read();

if (Seleccion=="1"){
Console.WriteLine("Fila 1 \n Inserte los valores\nValor A");
Matriz[0,0]=Convert.ToInt32(Console.Read());
Console.WriteLine("Valor B");
Matriz[0,1]=Convert.ToInt32(Console.Read());
}
//-Imprimir---------------------------------------------------------------------
    for (int fila=0;fila<3;fila++){ 
        for(int columna=0;columna<3;columna++){
           Texto=Texto+Matriz[fila,columna]+"    ";
        }
        Console.WriteLine(Texto);
        Texto="";
    }
//-------------------------------------------------------------------------------
}