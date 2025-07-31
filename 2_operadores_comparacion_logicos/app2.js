//bolean(..)

console.log( ' "5" == "5" ', "5" == "5" ); // true
console.log( ' "5" == "5" ', "5" === "5" ); // true
console.log( ' "5" == "5" ', 5 === "5" ); // false
console.log( ' "5" == "5" ', "5" == "5" ); // true
console.log( ' "5" == "5" ', "5" === (3+2) ); // false
console.log( ' "5" == "5" ', 5 === 5 ); // true

// Calculadora sencilla
let operacion = prompt("¿Qué operación quieres hacer? (sumar, restar, multiplicar, dividir)");
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let resultado;

/* if (operacion === "sumar") {
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

alert("El resultado es: " + resultado); */

console.log('tu. numero wa ${num1}')
