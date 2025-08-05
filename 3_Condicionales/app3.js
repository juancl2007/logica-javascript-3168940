//RANGO DE EDAD
const nombre = prompt("¿Cuál es tu nombre?");
const edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad < 18) {
    alert(`Hola ${nombre}, no puedes entrar a la discoteca.`);
}
else {
    alert(`Hola ${nombre}, puedes entrar a la discoteca.`);
}

//VERIFICAR INGRESO VIP
if (nombre === "Juan" || nombre === "Pedro") {
    alert(`Hola ${nombre}, tienes acceso VIP.`);
}

//REQUISITOS PARA ENTRAR A UN EQUIPO DE FÚTBOL
const nombre2 = prompt("¿Cuál es tu nombre?");

const estatura = parseFloat(prompt("¿Cuál es tu estatura en centimetros?"));

const velocidad = parseFloat(prompt("¿Cuál es tu velocidad en km/h?"));

const edadFutbol = parseInt(prompt("¿Cuál es tu edad?"));

if (estatura >= 170 && velocidad >= 30) {
    alert(`Felicidades ${nombre2}, cumples con los requisitos fisicos para entrar al equipo de fútbol.`);

     if (edadFutbol < 18) { 
        alert(` ${nombre2}, seras asignado a la categoria juvenil.`);
     }
     if (edadFutbol > 25) { 
            alert(` ${nombre2}, seras asignado a la categoria veteranos.`);
    }
    else { 
        alert(` ${nombre2}, seras asignado a la categoria Profesional.`);
    }
    

} else {
    alert(`Lo siento ${nombre2}, no cumples con los requisitos para entrar al equipo de fútbol.`);
}

