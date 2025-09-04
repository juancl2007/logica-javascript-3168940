const formulario = document.querySelector('#miFormulario');
const nombreInput = document.querySelector('#nombre');
const opcionSelect = document.querySelector('#opcion');
const radioOpciones = document.querySelectorAll('input[name="radioOpcion"]');



const enviarFormulario = (event) => {
    event.preventDefault();
    const usuario = {
        nombre: nombreInput.value,
        opcion: opcionSelect.value,
        radioOpcion: document.querySelector('input[name="radioOpcion"]:checked').value
    };
    console.log(usuario);

    console.log("Formulario Enviado");
    event.preventDefault(); 

}
formulario.addEventListener('submit', enviarFormulario);