document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.querySelector('#formulario');
    const inputDestino = document.querySelector('#destino');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const btnEnviar = document.querySelector('#enviar');
    const btnReset = document.querySelector('#reset');

    inputDestino.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);



    function validar(e) {
        if(e.target.value === ''){
            alertaError(e.target, e.target.parentElement);
        } 
    }

    function alertaError(input, campo) {
        const mensajeError = document.createElement('p');
        mensajeError.classList = 'msg-error';
        mensajeError.textContent = `El campo "${input.id}" es obligatorio`;
        
        campo.appendChild(mensajeError);
    }

})