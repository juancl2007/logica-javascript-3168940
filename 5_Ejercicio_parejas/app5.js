//ejercicio 1
/*
let num = Number(prompt("Ingrese un número:"));
if (num > 0) {
    alert("El número es positivo: " + num);
} else if (num < 0) {
    alert("El número es negativo: " + num);
} else {
    alert("El número es cero.");
}
*/

//ejercicio 2
/*
let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
if (num1 > 0 && num2 > 0) {
    alert("Los números positivos son: " + num1 + " y " + num2);
} else if (num1 > 0) {
    alert("El número positivo es: " + num1);
} else if (num2 > 0) {
    alert("El número positivo es: " + num2);
} else {
    alert("No hay números positivos.");
}
*/

//ejercicio 3
/*
let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));

if (num1 === num2) {
    resultado1 = num1 * num2;
    alert("El resultado es : " + resultado1);
} else if (num1 > num2) {
    resultado2 = num1 - num2;
    alert("El resultado es : " + resultado2);
}  
else {
    resultado3 = num1 + num2;
    alert("El resultado es : " + resultado3);
}
*/

//ejercicio 4
/*
let costoArticulo = Number(prompt("Ingrese el costo del artículo vendido:"));
let dineroEntregado = Number(prompt("Ingrese la cantidad de dinero entregada por el cliente:"));
 if (dineroEntregado >= costoArticulo) {
    cambio = dineroEntregado - costoArticulo;
    alert("El cambio a entregar es: " + cambio);
} else {
    alert("El dinero entregado no es suficiente.");
}
*/

// ejercicio 5
/*
let numeroVacunas = Number(prompt("Ingrese el número de vacunas:"));
let costoVacuna = Number(prompt("Ingrese el costo de las vacunas:"));
let costoAplicacion = Number(prompt("Ingrese el costo de aplicación:"));
let totalGastado = numeroVacunas * (costoVacuna + costoAplicacion);
alert("El total gastado en vacunas es: " + totalGastado);
*/

//ejercicio 6
/*
let precio = Number(prompt("Ingrese el precio de las camisas:"));
let cantidad = Number(prompt("Ingrese la cantidad de camisas:"));

subtotal = precio * cantidad;

  if (cantidad >= 3) {
    descuento = subtotal * 0.20; // 20% de descuento
    total1 = subtotal - descuento;
    alert("Con el descuento del 20% el subtotal es: " + total1);
  } else {
    descuento2 = subtotal * 0.10; // 10% de descuento
    total2 = subtotal - descuento2;
    alert("Con el descuento del 10% el subtotal es: " + total2);
  }
*/

//ejercicio 7
/*
let dineroInicial = Number(prompt("Ingrese el dinero inicial del tendero:"));
let ventas = 4 * 800000; // 4 ventas de $800.000 
let dinero = dineroInicial + ventas;
let pagoAcreedores = dinero * 0.10;
let dineroFinal = dinero - pagoAcreedores;

alert("Dinero inicial: " + dineroInicial);
alert("Dinero final sin pago a acrededores: " + dinero);
alert("Dinero final con pago a acreedores: " + dineroFinal);
alert("Pago a acreedores: " + pagoAcreedores);
*/

//ejercicio 8
/*
let ventas = [];
for (let i = 0; i < 5; i++) {
   let venta = Number(prompt("Ingrese la venta del día " + (i + 1) + ":"));
    ventas.push(venta);
}
let totalVentas = ventas.reduce((acc, curr) => acc + curr, 0);
 let promedioVentas = totalVentas / ventas.length;
alert("El promedio de ventas en los últimos 5 días es: " + promedioVentas);
*/

//ejercicio 9
/*
let operacion = prompt("¿Qué operación quieres hacer? (sumar, restar, multiplicar, dividir)");
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let resultado;

 if (operacion === "sumar") {
   resultado = num1 + num2;
} else if (operacion === "restar") {
  resultado = num1 - num2;
} else if (operacion === "multiplicar") {
    resultado = num1 * num2;
} else if (operacion === "dividir") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        resultado = "Error: No se puede dividir por cero.";
    }
} else {
  resultado = "Operación no válida.";
}

alert("El resultado es: " + resultado); 
*/

//ejercicio 10
/*

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

if (num1 === num2 && num2 === num3) {
    alert("Los tres números son iguales: " + num1);
}
else {
    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    let medio = num1 + num2 + num3 - mayor - menor;

    alert("Número mayor: " + mayor);
    alert("Número menor: " + menor);
    alert("Número medio: " + medio);

    if (num1 === num2 || num1 === num3) {
        alert("Números iguales: " + num1);
    }
    if (num2 === num3) {
        alert("Números iguales: " + num2);
    }
}
*/
//ejercicio 11
/*
let edad = parseInt(prompt("Ingrese la edad del deportista:"));
let altura = parseFloat(prompt("Ingrese la altura del deportista en metros:"));
let peso = parseFloat(prompt("Ingrese el peso del deportista en kilogramos:"));

if (edad >= 18 && altura > 1.7 && peso >= 50 && peso <= 90) {
    alert("El deportista queda seleccionado para el equipo de baloncesto.");
}
else {
    alert("El deportista no cumple con los requisitos para ser seleccionado.");
}
*/

//ejercicio 12
/*
let sueldoMinimo = 1000000; // Sueldo mínimo
let sueldoTrabajador = parseFloat(prompt("Ingrese el sueldo del trabajador:"));

if (sueldoTrabajador <= sueldoMinimo) {
    let aumento = sueldoTrabajador * 0.10; // Aumento del 10%
    let sueldoFinal = sueldoTrabajador + aumento;
    alert("El sueldo a devengar después del decreto es: " + sueldoFinal);
}
else {
    alert("El sueldo a devengar es: " + sueldoTrabajador);
}
*/

//ejercicio 13
/*
let datos = [];
for (let i = 0; i < 3; i++) {
    let dato = prompt("Ingrese el dato " + (i + 1) + ":");
    datos.push(dato);
}
alert("Contenido del array: " + datos.join(", "));
*/

//ejercicio 14
/*
let nombres = [];
let nombre;
do {
    nombre = prompt("Ingrese un nombre o escriba 'salir' para terminar:");
    if (nombre.toLowerCase() !== "salir") {
        nombres.push(nombre);
        document.write(nombre + "<br>");
    }
} while (nombre.toLowerCase() !== "salir");
alert("Nombres ingresados: " + nombres.join(", "));
*/

//ejercicio 15
/*
let num1 = Math.floor(Math.random() * 10); // Número de un dígito (0-9)
let num2 = Math.floor(Math.random() * 1000); // Número de hasta tres dígitos (0-999)
let respuestaUsuario = parseInt(prompt(`¿Cuánto es ${num1} x ${num2}?`));
let respuestaCorrecta = num1 * num2;
if (respuestaUsuario === respuestaCorrecta) {
    alert("¡Ganaste!");
}
else {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 1000);
    respuestaUsuario = parseInt(prompt(`Incorrecto. Intenta de nuevo: ¿Cuánto es ${num1} x ${num2}?`));
    respuestaCorrecta = num1 * num2;
    if (respuestaUsuario === respuestaCorrecta) {
        alert("¡Ganaste!");
    } else {
        alert(`Lo siento, la respuesta correcta era ${respuestaCorrecta}.`);
    }
}
*/

