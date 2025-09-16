const titulo = document.querySelector(".titulo");
const imagen = document.querySelector(".imagen");
const miniaturas = document.querySelectorAll(".miniaturas");

console.log(miniaturas);
console.log(imagen);
console.log(titulo);

function cambiarImagen(event) {
    console.log(event.target.src);
    titulo.textContent = event.target.name;
    if(!event.target.src) return;
    imagen.src = event.target.src;
    document.body.style.backgroundImage = `url('${event.target.src}')`;
}

miniaturas.forEach((miniatura) => {
  miniatura.addEventListener("click", cambiarImagen);
});
