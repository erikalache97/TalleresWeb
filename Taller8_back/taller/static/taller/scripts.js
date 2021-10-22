const nombres = document.getElementById("id_nombres");
const apellidos = document.getElementById("id_apellidos");
const nacimiento = document.getElementById("id_fechanacimiento");
const tipoDocumento = document.getElementById("id_tipodocumento");
const documento = document.getElementById("id_documento");
const lugarResidencia = document.getElementById("id_lugarresidencia");
const email = document.getElementById("id_email");
const telefono = document.getElementById("id_telefono");
const usuario = document.getElementById("id_usuario");
const password = document.getElementById("id_password");

function validarFormulario() {
    errores = 0;

    pattern = new RegExp('^[A-Z ]+$', 'i');
    if (!pattern.test(nombres.value)) {
        setErrorFor(nombres, "Sus nombres solo pueden contener letras");
    } else {
        setSuccessFor(nombres);
    }

    if (!pattern.test(apellidos.value)) {
        setErrorFor(apellidos, "Sus apellidos solo pueden contener letras");
    } else {
        setSuccessFor(apellidos);
    }

    if(tipoDocumento.value=="" || tipoDocumento.value==null)
    {
        setErrorFor(tipoDocumento, "Seleccione su tipo de documento");
    }
    else 
    {
        setSuccessFor(tipoDocumento);
    }

    if (documento.value.length != 8 && documento.value.length != 10 ) {
        setErrorFor(documento, "Su documento debe tener 8 o 10 numeros");
    } else {
        setSuccessFor(documento);
    }

    if(lugarResidencia.value=="" || lugarResidencia.value==null)
    {
        setErrorFor(lugarResidencia, "Seleccione su lugar de residencia");
    }
    else 
    {
        setSuccessFor(lugarResidencia);
    }

    var hoy=new Date();
    hoy.setHours(0,0,0,0);
    if(nacimiento.value=="" || nacimiento.value==null)
    {
        setErrorFor(nacimiento, "Seleccione su fecha de nacimiento");
    }
    else if(Date.parse(hoy)<Date.parse(nacimiento.value))
    {
        setErrorFor(nacimiento, "No es posible seleccionar esa fecha de nacimiento");
    }
    else 
    {
        setSuccessFor(nacimiento);
    }

    pattern = new RegExp("^[A-Z]+$", "i");
    if (!pattern.test(usuario.value)) {
        setErrorFor(usuario, "Su usuario no debe contener caracteres extraños");
    } else {
        setSuccessFor(usuario);
    }

    if (password.value.length < 15 || password.value.length > 20) {
        setErrorFor(password, "Su contraseña debe tener entre 15 y 20 caracteres");
    } else if (!/[A-Z]/g.test(password.value)) {
        setErrorFor(password, "Su contraseña debe incluir mayusculas");
    } else if (!/\/|#|%|&/g.test(password.value)) {
        setErrorFor(password, "Su contraseña debe incluir simbolos especiales como: #,%,/,&");
    } else {
        setSuccessFor(password);
    }

    if (!isEmail(email.value)) {
        setErrorFor(email, "Su email no es correcto");
    } else {
        setSuccessFor(email);
    }

    if (telefono.value.length != 7 && telefono.value.length != 10) {
        setErrorFor(telefono, "Su numero debe tener 7 o 10 caracteres (fijo ó móvil)");
    } else {
        setSuccessFor(telefono);
    }
    
    if (errores > 0) {
        return false;
    }
    if (errores === 0) {
        alert("Se han registrado sus respuestas. Gracias por participar.");
        return true;
    }
}

function setErrorFor(input, message) {
    errores++;
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-div error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-div success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}