const nombre = document.getElementById('nombre');
const apellido = document.getElementById("apellido");
const username = document.getElementById("id_usr");
const ccpaswd = document.getElementById("ccpaswd");
const ccpaswd2 = document.getElementById("ccpaswd2");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const residencia = document.getElementById("residence");
const municipio = document.getElementById("municipios");

function validarFormulario() {
    errores = 0;

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

    const pattern = new RegExp("^[A-Z]+$", "i");
    if (username.value == "") {
        setErrorFor(username, "Ingrese su usuario");
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

    if (email.value === "") {
        setErrorFor(email, "Ingrese su email");
    } else if (email.value.length > 120) {
        setErrorFor(email, "Su email debe tener menos de 120 caracteres");
    } else if (!isEmail(email.value)) {
        setErrorFor(email, "Su email no es correcto");
    } else {
        setSuccessFor(email);
    }

    if (ccpaswd2.value == "") {
        setErrorFor(ccpaswd2, "Ingrese la contraseña nuevamente");
    } else if (ccpaswd.value != ccpaswd2.value) {
        setErrorFor(ccpaswd2, "Las contraseñas no coinciden");
    } else {
        setSuccessFor(ccpaswd2);
    }

    if (telefono.value.length != 7 && telefono.value.length != 10) {
        setErrorFor(
            telefono,
            "Su numero debe tener 7 o 10 caracteres (fijo ó móvil)"
        );
    } else {
        setSuccessFor(telefono);
    }

    if (residencia.value == "xxx") {
        setErrorFor(residencia, "Seleccione un departamento")
    } else {
        setSuccessFor(residencia)
        if (municipio.value == "xxx") {
            setErrorFor(municipio, "Seleccione un municipio")
        } else {
            setSuccessFor(municipio)
        }
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

var requestURL = "https://www.datos.gov.co/resource/xdk5-pm3f.json";

function loadMunicipios() {
    var select = document.getElementById("residence");
    var dpto = select.options[select.selectedIndex].value;
    fetch(requestURL)
        .then((data) => data.json())
        .then((data) => {
            var dptos = data;

            var municipios = [];
            dptos.forEach((item) => {
                if (item.departamento == dpto) {
                    municipios.push(item.municipio);
                }
            });
            if (municipios.length > 0) {
                setMunicipios(municipios);
            }
        });
}

function setMunicipios(municipios) {
    var html = '<option value="xxx" selected> </option>';
    municipios.forEach((item) => {
        html += "<option>" + item + "</option>";
    });
    document.getElementById("municipios").innerHTML = html;
    document.getElementById("invisible").className = "form-div";
}