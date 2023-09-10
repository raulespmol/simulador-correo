document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.querySelector('#formulario');
    const inputDestino = document.querySelector('#destino');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const btnEnviar = document.querySelector('#enviar');
    const btnReset = document.querySelector('#reset');

    const correo = {
        destino: '',
        asunto: '',
        mensaje: ''

    } ;

    inputDestino.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);



    function validar(e) {
        if(e.target.value.trim() === ''){
            alertaError(`El campo "${e.target.id}" es obligatorio`, e.target.parentElement);
            return
        }
        if(e.target.id === 'destino' && !validarFormatoEmail(e.target.value)){
            alertaError(`El email no es válido`, e.target.parentElement);
            return;
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

    function validarFormatoEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }
})