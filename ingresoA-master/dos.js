/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
let marca;
let precio;
let peso;
let tipo;
let marcamasLiquida =0;
let marcaSolido;
let marcaCara;
let acumLiquido=0;
let acumSolido=0;
let contadorLiquido=0;
let totalPeso;
let contadorSolido=0;
let flagpeso=0;
let flagMarca=0;
let flagLiquida=0;
let seguir;

do {
     marca = prompt("Ingrese la marca del producto");

    tipo = prompt("Ingrese el tipo de producto: solido / liquido.").toLowerCase();
		while (tipo != "solido" && tipo != "liquido" ) {
			tipo = prompt("Incorrecto. Ingrese el tipo de producto: solido / liquido.").toLowerCase();
		}
     peso = parseFloat(prompt("Ingrese el peso"));
     while (peso <0 || peso >1000 || isNaN(peso)) {
     peso = parseFloat(prompt("Error.Ingrese de nuevo el peso"));
       
     }
		precio = parseFloat(prompt("Ingrese precio. Entre 1 a 1000"));
		while (precio <= 1 || precio >= 1000 || isNaN(precio)) {
			precio = parseFloat(prompt("Incorrecto. Ingrese precio. Entre 1 y 1000"));
    }
     switch (tipo) {
       case 'liquido':
              if (tipo == 'liquido'){ 

              if ( marca > marcamasLiquida ||flagLiquida ==0){
                   marcamasLiquida = marca;
                   flagLiquida=1;
              }
              acumLiquido += peso;
            }
         break;
       case 'solido':

             tipo == "solido";
             acumSolido += peso;
         break;
     }

    if (marca > marcaCara || flagMarca == 0) {

      marcaCara = marca;
      flagMarca = 1;
    }
    if (tipo == "solido" && tipo == 'liquido' ||flagpeso == 0) {
      
      totalPeso = acumSolido + acumLiquido;
       flagpeso = 1;
    }
    


  seguir = prompt("¿Deseas ingresar otro producto?");
}while (seguir == 's') 


console.log("a)informar el peso total de la compra "+ totalPeso );
console.log("b)la marca del más caro de los líquidos " + marcaCara );
console.log(" c)la marca del más liviano de los sólidos " + marcamasLiquida);



}
