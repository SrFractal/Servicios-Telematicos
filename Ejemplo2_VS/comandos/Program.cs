Console.Clear();
// VARIABLES ------------------------------------------
string Cadena="El número es = ";
string Cadena2="El ascii es = ";
int Limite=0;
double suma=0.1;
// COMANDOS ------------------------------------------
Console.WriteLine("Digite un número: ");
Limite=Console.Read();

Console.WriteLine(Cadena2+Limite);

for(double i=0; i<Limite; i++){
    Console.WriteLine(Cadena+i);
}
