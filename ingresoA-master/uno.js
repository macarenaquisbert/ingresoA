/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let sexo;
	let edad;
	let temperatura;
	let cantidadF=0;
	let cantidaM =0;
	let acumFemenino=0;
	let totalcantidad;
	let totalEdad;
	let temperaturadelaMujer;
	let acumMasculino=0;
	let flagEdad=0;
	let flagMujer=0;
	let promedio;


    for(let i = 0; i < 5; i++) { 
	sexo = prompt("Ingrese sexo de la persona");
	while (sexo != 'f' && sexo != 'm') {
	sexo = prompt(" Error . Ingrese de nuevo sexo de la persona");
	} 
	
	edad = parseInt(prompt("Ingrese la edad de la persona"));
	while (!(edad >= 18) || isNaN(edad)) {
	edad = prompt(parseInt(" Error. Ingrese  de nuevo la edad de la persona"));
		
	}
	temperatura = parseFloat(prompt("Temperatura corporal: Ingrese temperatura corporal en °C"));
	while (temperatura < 35 || temperatura > 42 || isNaN(temperatura)) {
	temperatura = parseFloat(prompt("Incorrecto: Ingrese una temperatura corporal en °C válida."));
	}
     switch (sexo) {
		 case 'f':
			 sexo = 'f'
			 
			 acumFemenino +=edad;
			 cantidadF ++;
			 break;
	 
		 case 'm':
			 sexo = 'm';
			 cantidaM ++;
			 acumMasculino += edad;
			 break;
	 }

	 if (temperatura > temperaturadelaMujer || flagMujer ==0 ) {
		 
		temperaturadelaMujer = temperatura;
		flagMujer = 1;
	 }
}
    if (sexo == 'f' && sexo == 'm' || flagEdad ==0 ) {
		
		totalEdad = acumMasculino + acumFemenino;
		totalcantidad = cantidaM + cantidadF;
		flagEdad=1;
	}
	//promedio
	promedio = totalEdad / totalcantidad;


console.log("informar la cantidad de personas de cada sexo"+ totalcantidad );
console.log("b)la edad promedio en total" + promedio );
console.log("c)la mujer con más temperatura" + temperaturadelaMujer );

}
/*a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log */