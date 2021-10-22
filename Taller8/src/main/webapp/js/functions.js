
function listarPersonas(){
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.style.display = "none";
    var peticion = document.createElement("input");
    peticion.setAttribute("type", "text");
    peticion.setAttribute("name", "peticion");
    peticion.setAttribute("value", "listarTodos");
    peticion.style.display = "none";
    form.appendChild(peticion);
    document.body.appendChild(form);
    form.submit();
}

function pedirDocumentoPersona(){
    var div_resultados = document.getElementById("resultados");
    var tablas = document.getElementById("tablas");
    if(tablas != null){
        tablas.style.display = "none";
    }
    var formulario = document.getElementById("formulario_crud");
    if(formulario != null){
        formulario.remove();
    }
    
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.setAttribute("id", "formulario_crud");
    var peticion = document.createElement("input");
    peticion.setAttribute("type", "hidden");
    peticion.setAttribute("name", "peticion");
    peticion.setAttribute("value", "buscar");
    peticion.style.display = "none";
    
    var labDoc = document.createElement("label");
    labDoc.setAttribute("for", "documento");
    labDoc.innerHTML = "Escriba documento a consultar: ";
    var inpDoc = document.createElement("input");
    inpDoc.setAttribute("type", "text");
    inpDoc.setAttribute("name", "documento");
    var btnSub = document.createElement("input");
    btnSub.setAttribute("type", "submit");
    btnSub.setAttribute("value", "Consultar");
    form.appendChild(peticion);
    form.appendChild(labDoc);
    form.appendChild(inpDoc);
    form.appendChild(btnSub);
    div_resultados.appendChild(form);
}

function eliminarPersonaDocumento(){
    var div_resultados = document.getElementById("resultados");
    var tablas = document.getElementById("tablas");
    if(tablas != null){
        tablas.style.display = "none";
    }
    var formulario = document.getElementById("formulario_crud");
    if(formulario != null){
        formulario.remove();
    }
    
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.setAttribute("id", "formulario_crud");
    var peticion = document.createElement("input");
    peticion.setAttribute("type", "hidden");
    peticion.setAttribute("name", "peticion");
    peticion.setAttribute("value", "eliminar");
    peticion.style.display = "none";
    
    var labDoc = document.createElement("label");
    labDoc.setAttribute("for", "documento");
    labDoc.innerHTML = "Escriba documento de la persona a eliminar: ";
    var inpDoc = document.createElement("input");
    inpDoc.setAttribute("type", "text");
    inpDoc.setAttribute("name", "documento");
    var btnSub = document.createElement("input");
    btnSub.setAttribute("type", "submit");
    btnSub.setAttribute("value", "Consultar");
    form.appendChild(peticion);
    form.appendChild(labDoc);
    form.appendChild(inpDoc);
    form.appendChild(btnSub);
    div_resultados.appendChild(form);
}

function agregarPersona(){
    var div_resultados = document.getElementById("resultados");
    var tablas = document.getElementById("tablas");
    if(tablas != null){
        tablas.style.display = "none";
    }
    var formulario = document.getElementById("formulario_crud");
    if(formulario != null){
        formulario.remove();
    }
    
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.setAttribute("id", "formulario_crud");
    var peticion = document.createElement("input");
    peticion.setAttribute("type", "hidden");
    peticion.setAttribute("name", "peticion");
    peticion.setAttribute("value", "agregar");
    peticion.style.display = "none";
    
    var lblNom = document.createElement("label");
    lblNom.setAttribute("for", "nombre");
    lblNom.innerHTML = "Nombre: ";
    var inpNom = document.createElement("input");
    inpNom.setAttribute("type", "text");
    inpNom.setAttribute("name", "nombre");
    var lblApe = document.createElement("label");
    lblApe.setAttribute("for", "apellido");
    lblApe.innerHTML = "Apellido: ";
    var inpApe = document.createElement("input");
    inpApe.setAttribute("type", "text");
    inpApe.setAttribute("name", "apellido");
    
    var lblTip = document.createElement("label");
    lblTip.setAttribute("for", "tipDoc");
    lblTip.innerHTML = "Tipo Documento: ";
    var inpTip = document.createElement("input");
    inpTip.setAttribute("type", "list");
    inpTip.setAttribute("list", "tipDoc");
    inpTip.setAttribute("name", "tipDoc");
    var lstTip = document.createElement("datalist");
    lstTip.setAttribute("id", "tipDoc");
    var opc1 = document.createElement("option");
    opc1.setAttribute("value", "1");
    opc1.innerHTML = "C.C.";
    lstTip.appendChild(opc1);
    var opc2 = document.createElement("option");
    opc2.setAttribute("value", "2");
    opc2.innerHTML = "C.E.";
    lstTip.appendChild(opc2);
    var opc3 = document.createElement("option");
    opc3.setAttribute("value", "3");
    opc3.innerHTML = "P.";
    lstTip.appendChild(opc3);
    var opc4 = document.createElement("option");
    opc4.setAttribute("value", "4");
    opc4.innerHTML = "T.I.";
    lstTip.appendChild(opc4);
    
    var lblDoc = document.createElement("label");
    lblDoc.setAttribute("for", "documento");
    lblDoc.innerHTML = "# Documento: ";
    var inpDoc = document.createElement("input");
    inpDoc.setAttribute("type", "text");
    inpDoc.setAttribute("name", "documento");
    
    var lblCiu = document.createElement("label");
    lblCiu.setAttribute("for", "ciudad");
    lblCiu.innerHTML = "Ciudad de Residencia: ";
    var inpCiu = document.createElement("input");
    inpCiu.setAttribute("type", "list");
    inpCiu.setAttribute("list", "ciudades");
    inpCiu.setAttribute("name", "ciudad");
    var lstCiu = document.createElement("datalist");
    lstCiu.setAttribute("id", "ciudades");
    var opc11 = document.createElement("option");
    opc11.setAttribute("value", "121");
    opc11.innerHTML = "Bucaramanga - Santander";
    lstCiu.appendChild(opc11);
    var opc21 = document.createElement("option");
    opc21.setAttribute("value", "111");
    opc21.innerHTML = "Bogotá D.C. - Bogotá D.C.";
    lstCiu.appendChild(opc21);
    
    var btnSub = document.createElement("input");
    btnSub.setAttribute("type", "submit");
    btnSub.setAttribute("value", "Crear Persona");
    form.appendChild(peticion);
    form.appendChild(lblNom);
    form.appendChild(inpNom);
    form.appendChild(document.createElement("br"));
    form.appendChild(lblApe);
    form.appendChild(inpApe);
    form.appendChild(document.createElement("br"));
    form.appendChild(lblTip);
    form.appendChild(inpTip);
    form.appendChild(lstTip);
    form.appendChild(document.createElement("br"));
    form.appendChild(lblDoc);
    form.appendChild(inpDoc);
    form.appendChild(document.createElement("br"));
    form.appendChild(lblCiu);
    form.appendChild(inpCiu);
    form.appendChild(lstCiu);
    form.appendChild(document.createElement("br"));
    form.appendChild(btnSub);
    div_resultados.appendChild(form);
}
