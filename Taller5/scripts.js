const idt = document.getElementById('idt');
const id_pais = document.getElementById('id_pais');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById("apellido");
const av_direc = document.getElementById("av_direc");
const direccion = document.getElementById("direccion");
const username = document.getElementById("id_usr");
const ccpaswd = document.getElementById("ccpaswd");
const ccpaswd2 = document.getElementById("ccpaswd2");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const residencia = document.getElementById("residence");
const municipio = document.getElementById("municipios");

function validarFormulario() {
    errores = 0;

    if (idt.value === "" || idt.value == null) {
        setErrorFor(idt, "Ingrese su documento");
    } else if (idt.value.length > 11) {
        setErrorFor(idt, "Su documento debe tener maximo 11 caracteres");
    } else {
        setSuccessFor(idt);
    }

    if (id_pais.value === "" || id_pais.value == null) {
        setErrorFor(id_pais, "Seleccione un elemento de la lista");
    } else {
        setSuccessFor(id_pais);
    }

    if (nombre.value === "" || nombre.value == null) {
        setErrorFor(nombre, "Ingrese su nombre");
    } else if (nombre.value.length > 25) {
        setErrorFor(nombre, "Su nombre debe tener maximo 25 caracteres");
    } else {
        setSuccessFor(nombre);
    }

    if (apellido.value === "") {
        setErrorFor(apellido, "Ingrese su apellido");
    } else if (apellido.value.length > 25) {
        setErrorFor(apellido, "Su apellido debe tener maximo 25 caracteres");
    } else {
        setSuccessFor(apellido);
    }

    if (av_direc.value === "" || av_direc == null) {
        setErrorFor(av_direc, "Seleccione un elemento de la lista");
    } else if (direccion.value === "" || direccion == null) {
        setErrorFor(direccion, "Ingrese su dirección");
    } else {
        setSuccessFor(av_direc);
        setSuccessFor(direccion);
    }

    const pattern = new RegExp("^[A-Z]+$", "i");
    if (username.value == "") {
        setErrorFor(username, "Ingrese su usuario");
    }else if (username.value.length < 10 || username.value.length > 20) {
            setErrorFor(username, "Su usuario debe tener entre 10 y 20 caracteres");
    } else if (!pattern.test(username.value)) {
        setErrorFor(username, "Su usuario no debe contener caracteres extraños");
    } else {
        setSuccessFor(username);
    }

    if (ccpaswd.value === "") {
        setErrorFor(ccpaswd, "Ingrese una contraseña");
    } else if (ccpaswd.value.length < 15 || ccpaswd.value.length > 20) {
        setErrorFor(ccpaswd, "Su contraseña debe tener entre 15 y 20 caracteres");
    } else if (!/[A-Z]/g.test(ccpaswd.value)) {
        setErrorFor(ccpaswd, "Su contraseña debe incluir mayusculas");
    } else if (!/\/|#|%|&/g.test(ccpaswd.value)) {
        setErrorFor(
            ccpaswd,
            "Su contraseña debe incluir simbolos especiales como: #,%,/,&"
        );
    } else {
        setSuccessFor(ccpaswd);
    }

    if (ccpaswd2.value == "") {
        setErrorFor(ccpaswd2, "Ingrese la contraseña nuevamente");
    } else if (ccpaswd.value != ccpaswd2.value) {
        setErrorFor(ccpaswd2, "Las contraseñas no coinciden");
    } else {
        setSuccessFor(ccpaswd2);
    }

    if (email.value === "") {
        setErrorFor(email, "Ingrese su email");
    } else if (email.value.length > 120) {
        setErrorFor(email, "Su email debe tener menos de 120 caracteres");
    } else if (!isEmail(email.value)) {
        setErrorFor(email, "Su email no es correcto");
    } else {
        setSuccessFor(email);
    }

    if (telefono.value.length != 7 && telefono.value.length != 10) {
        setErrorFor(
            telefono,
            "Su numero debe tener 7 o 10 caracteres (fijo ó móvil)"
        );
    } else {
        setSuccessFor(telefono);
    }

    if (errores > 0) {
        return false;
    } else if (errores === 0) {
        alert("Se han registrado sus respuestas. Gracias por participar.");
        return true;
    }
    
    return true;
}

function setErrorFor(input, message) {
    errores++;
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-div error";
    small.innerText = message;
}

function showSection(input, message) {
    input.className = "mostrar";
}

function hideSection(input) {
    input.className = "ocultar";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-div success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}