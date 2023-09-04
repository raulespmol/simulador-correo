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
        if(e.target.value.trim() === ''){
            alertaError(`El campo "${e.target.id}" es obligatorio`, e.target.parentElement);
            return
        }
        limpiarError(e.target.parentElement);
    }

    function alertaError(mensaje, campo) {
        limpiarError(campo);

        const mensajeError = document.createElement('p');
        mensajeError.classList = 'msg-error';
        mensajeError.textContent = mensaje;
        
        campo.appendChild(mensajeError);
    }

    function limpiarError(campo) {
        const alerta = campo.querySelector('.msg-error');
        if(alerta){
            alerta.remove();
        }
    }

})