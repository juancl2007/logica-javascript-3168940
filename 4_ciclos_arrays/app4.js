/* let frutas = [ "mango", "banano", "naranja", "uva" ];
let jugadores = [ 
 {
    id: 1,
    nombre: "Lionel Messi",
    equipo: "PSG"
 },
 {
    id: 2,
    nombre: "Cristiano Ronaldo",
    equipo: "Manchester United"
 },
 {
    id: 3,
    nombre: "Neymar Jr",
    equipo: "PSG"
 }   
]
console.log(jugadores[0].nombre); // imprimir

// objeto
let pelicula = {
    nombre: "Inception",
    director: "Christopher Nolan",
    salio: 2010,
    calificacion: 8.8
}
 */

// Ejercicio 1 & 2 - While: Múltiplos de 5

function multiploCincoWhile() {
const numero = parseInt(document.getElementById("inputWhile").value);
let i = 1;
let resultado = "";

while (i <= numero) {
if (i % 5 === 0) {
resultado += i + " ";
}
i++;
}

document.getElementById("resultadoWhile").innerText = resultado || "No hay múltiplos de 5.";
}

// Ejercicio 3 - Do...While: Múltiplos de 5

function multiploCincoDoWhile() {
const numero = parseInt(document.getElementById("inputDoWhile").value);
let i = 1;
let resultado = "";

if (isNaN(numero) || numero < 1) {
document.getElementById("resultadoDoWhile").innerText = "Introduce un número válido.";
return;
}

do {
if (i % 5 === 0) {
resultado += i + " ";
}
i++;
} while (i <= numero);

document.getElementById("resultadoDoWhile").innerText = resultado || "No hay múltiplos de 5.";
}

// Ejercicio 4 - For: Números impares

function imprimirImpares() {
console.log("Números impares del 1 al 100:");
for (let i = 1; i <= 100; i++) {
if (i % 2 !== 0) {
console.log(i);
}
}
}

// Ejercicio 5 - For: Excluir rango
// Ejercicio 1 & 2 - While: Múltiplos de 5
function multiploCincoWhile() {
const numero = parseInt(document.getElementById("inputWhile").value);
let i = 1;
let resultado = "";

while (i <= numero) {
if (i % 5 === 0) {
resultado += i + " ";
}
i++;
}

document.getElementById("resultadoWhile").innerText = resultado || "No hay múltiplos de 5.";
}

// Ejercicio 3 - Do...While: Múltiplos de 5
function multiploCincoDoWhile() {
const numero = parseInt(document.getElementById("inputDoWhile").value);
let i = 1;
let resultado = "";

if (isNaN(numero) || numero < 1) {
document.getElementById("resultadoDoWhile").innerText = "Introduce un número válido.";
return;
}

do {
if (i % 5 === 0) {
resultado += i + " ";
}
i++;
} while (i <= numero);

document.getElementById("resultadoDoWhile").innerText = resultado || "No hay múltiplos de 5.";
}

// Ejercicio 4 - For: Números impares
function imprimirImpares() {
console.log("Números impares del 1 al 100:");
for (let i = 1; i <= 100; i++) {
if (i % 2 !== 0) {
console.log(i);
}
}
}

// Ejercicio 5 - For: Excluir rango
function excluirRango() {
const inicio = parseInt(document.getElementById("inicioRango").value);
const fin = parseInt(document.getElementById("finRango").value);
let resultado = "";

if (
isNaN(inicio) || isNaN(fin) ||
inicio < 1 || fin > 100 ||
inicio > fin || (fin - inicio + 1) !== 10
) {
document.getElementById("resultadoRango").innerText = "Ingresa un rango válido de 10 números dentro del 1 al 100.";
return;
}

for (let i = 1; i <= 100; i++) {
if (i < inicio || i > fin) {
resultado += i + " ";
}
}

document.getElementById("resultadoRango").innerText = resultado;
}

// cree un ciclo que imprima la tabla de multipicar del 7


for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7*1}`)

}

// cree un ciclo que imprima la tabla de multipicar del 7


for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7*1}`)

}
