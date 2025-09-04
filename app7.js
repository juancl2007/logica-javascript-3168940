const pantalla = document.querySelector(".pantalla")
const BtnMenos = document.querySelector(".btn-menos")
const BtnMas = document.querySelector(".btn-mas")
let counter = 0

//2.funcion
function incrementar (){
    counter++
    pantalla.textContent = counter
    if (counter >= 10 && counter < 30) {
        pantalla.style.color = "red"
    }
    if (counter >= 30) {
        pantalla.style.color = "green"
        document.body.style.backgroundColor = "blue"
    }
    
}

function decrementar () {
    if (counter <= 0) {
        return counter = 0
    }
    
    counter--
    pantalla.textContent = counter
    if (counter < 10 ) {
        pantalla.style.color = "black"
    }
    if (counter >= 10 && counter < 30) {
        pantalla.style.color = "red"
        document.body.style.backgroundColor = "white"
    }
}


//3.crear el evento
BtnMas.addEventListener("click", incrementar)
BtnMenos.addEventListener("click", decrementar)