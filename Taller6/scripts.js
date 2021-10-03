const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const ccpaswd = document.getElementById('ccpaswd')
const ccpaswd2 = document.getElementById('ccpaswd2')
const email = document.getElementById('email')
const username = document.getElementById('id_usr')
const eRadio = document.getElementsByName('eRadio')
const estilo = document.getElementById('id_estilo')
const divEnfermedades = document.getElementById('id_divEnfermedades')


function validarFormulario() {
    errores = 0;

    if (nombre.value === "") {
        setErrorFor(nombre, "Ingrese su nombre")
    } else if (nombre.value.length > 25) {
        setErrorFor(nombre, "Su nombre debe tener maximo 25 caracteres")
    } else {
        setSuccessFor(nombre)
    }

    if (apellido.value === "") {
        setErrorFor(apellido, "Ingrese su apellido")
    } else if (apellido.value.length > 25) {
        setErrorFor(apellido, "Su apellido debe tener maximo 25 caracteres")
    } else {
        setSuccessFor(apellido)
    }

    if (ccpaswd.value === "") {
        setErrorFor(ccpaswd, "Ingrese una contraseña")
    } else if (ccpaswd.value.length < 15 || ccpaswd.value.length > 20) {
        setErrorFor(ccpaswd, "Su contraseña debe tener entre 15 y 20 caracteres")
    } else if (!(/[A-Z]/g.test(ccpaswd.value))) {
        setErrorFor(ccpaswd, "Su contraseña debe incluir mayusculas")
    } else if (!(/\/|#|%|&/g.test(ccpaswd.value))) {
        setErrorFor(ccpaswd, "Su contraseña debe incluir simbolos especiales como: #,%,/,&")
    } else {
        setSuccessFor(ccpaswd)
    }

    if (email.value === '') {
        setErrorFor(email, 'Ingrese su email');
    } else if (email.value.length > 120) {
        setErrorFor(email, 'Su email debe tener menos de 120 caracteres');
    } else if (!isEmail(email.value)) {
        setErrorFor(email, 'Su email no es correcto');
    } else {
        setSuccessFor(email);
    }

    if (ccpaswd2.value == "") {
        setErrorFor(ccpaswd2, 'Ingrese la contraseña nuevamente')
    } else if (ccpaswd.value != ccpaswd2.value) {
        setErrorFor(ccpaswd2, 'Las contraseñas no coinciden')
    } else {
        setSuccessFor(ccpaswd2)
    }


    const pattern = new RegExp('^[A-Z]+$', 'i');
    if (username.value == "") {
        setErrorFor(username, "Ingrese su usuario")
    } else if (!pattern.test(username.value)) {
        setErrorFor(username, "Su usuario no debe contener caracteres extraños")
    } else {
        setSuccessFor(username)
    }

    for (var i = 0, length = eRadio.length; i < length; i++) {
        if (eRadio[i].checked) {
            if (eRadio[i].value == "si") {
                showSection(divEnfermedades, "Seleccione las enfermedades contagiosas que ha sufrido.")

            } else if (eRadio[i].value == "no") {
                hideSection(divEnfermedades)
            }
            break;
        }
    }

    if (errores > 0) {
        return false;
    } else if (errores === 0) {
        alert("Se han registrado sus respuestas. Gracias por participar.")
        return true;
    }
}

$(function () {
    $('#nacimiento').on('change', calcularEdad);
});

function calcularEdad() {
    fecha = $(this).val();
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    $('#age').val(edad + " años");
}

function setErrorFor(input, message) {
    errores++;
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-div error';
    small.innerText = message;
}

function showSection(input, message) {
    input.className = 'mostrar';
}

function hideSection(input) {
    input.className = 'ocultar';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-div success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

var requestURL = 'https://jsonplaceholder.typicode.com/users';

$('#visualizar').on('click', function () {
    $(this).hide()
    $.ajax({
        url: requestURL,
        success: function (data) {
            $datos = $('#myTable');
            for (var i = 0; i < data.length; i++) {
                var $tr = $('<tr></tr>');
                $tr.append('<td>' + data[i].name + '</td>');
                $tr.append('<td>' + data[i].username + '</td>');
                $tr.append('<td>' + data[i].email + '</td>');
                $datos.append($tr);
            }
        }
    });
});
