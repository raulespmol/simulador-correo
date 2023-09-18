document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.querySelector('#formulario');
    const inputDestino = document.querySelector('#destino');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const btnEnviar = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');

    const correo = {
        destino: '',
        asunto: '',
        mensaje: ''
    } ;

    inputDestino.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    btnReset.addEventListener('click', resetearFormulario);
    formulario.addEventListener('submit', enviarCorreo);


    function validar(e) {
        if(e.target.value.trim() === ''){
            alertaError(`El campo "${e.target.id}" es obligatorio`, e.target.parentElement);
            correo[e.target.id] = '';
            validarCorreo();
            return
        }
        if(e.target.id === 'destino' && !validarFormatoEmail(e.target.value)){
            alertaError(`El email no es válido`, e.target.parentElement);
            correo[e.target.id] = '';
            validarCorreo();
            return;
        }
        
        correo[e.target.id] = e.target.value.trim().toLowerCase();
        console.table(correo);
        validarCorreo();
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

    function validarCorreo() {
        if(Object.values(correo).includes('')){
            btnEnviar.disabled = true;
            return;
        } 
        btnEnviar.disabled = false;
    }

    function resetearFormulario(){
        correo.destino = '';
        correo.asunto = '';
        correo.mensaje = '';
        
        formulario.reset();
        btnEnviar.disabled = true;
    }

    function enviarCorreo(e) {
        e.preventDefault();
    
        console.log('correo enviado!')
        formulario.reset();
    }
})

