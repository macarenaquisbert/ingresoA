/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar(){ 
    let seguir;
	let nombre;
	let lugar;
	let temporada;
	let cantidad;
	let ContBariloche = 0;
	let ContCataratas = 0;
	let ContSalta = 0;
	let lugarmasElegido;
	let cantidadconmasPasajeros=0;
	let flagcantidad=0;
	let cantidadnombrePasajero;
	let promedioInvierno = 0;
	let acumPersonasInvierno = 0;
	let cantidadPersonasInvierno = 0;

	do {
		nombre = prompt("Ingrese el nombre");

		lugar = prompt('Ingrese destino: “bariloche”, “cataratas” o “salta”')
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt('Inválido. Ingrese destino: “bariloche”, “cataratas” o “salta”');
		}

		temporada = prompt('Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”');
		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera") {
			temporada = prompt('Inválido. Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”');
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de personas"));
		while (cantidad < 0 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Inválido. Ingrese la cantidad de personas"));
		}

		switch (lugar) {
			case "bariloche":
				ContBariloche++;
				break;
			case "cataratas":
				ContCataratas++;
				break;
			case "salta":
				ContSalta++;
				break;
		}

	
		if (flagcantidad ==0 || cantidad > cantidadconmasPasajeros) {
			cantidadconmasPasajeros = cantidad;
			cantidadnombrePasajero = nombre;
			flagcantidad=1;
		}

	
		if (temporada == "invierno") {
			cantidadPersonasInvierno++
			acumPersonasInvierno += (cantidad + 1);
		}

		seguir= prompt("¿Desea agregar más datos?");
	} while (seguir == "si");

	promedioInvierno = acumPersonasInvierno / cantidadPersonasInvierno;

	if (ContBariloche > ContCataratas && ContBariloche > ContSalta) {
		lugarmasElegido = "Bariloche";
	} else if (ContCataratas >= ContBariloche && ContCataratas > ContSalta) {
		lugarmasElegido = "Cataratas";
	} else {
		lugarmasElegido = "Salta";
	}

	console.log("A. El lugar más elegido para viajar es " + lugarmasElegido);
	console.log("B. La persona que lleva más pasajeros se llama " +  + " y lleva " + cantidadconmasPasajeros  + " personas.");
	console.log("C. El promedio de personas que viajan en invierno es " + promedioInvierno);
}


