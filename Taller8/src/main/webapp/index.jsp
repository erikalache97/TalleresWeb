<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.erika.taller8.modelo.Persona" %>
<%@page import="com.erika.taller8.controlador.PersonaControl" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Taller 8 - Web MVC</title>
        <link rel="stylesheet" href="css/styles.css">
        <script src="js/functions.js"></script>
    </head>
    <body>
        <h1>Escoja la acción a realizar</h1>
        <div class="div_botons">
            <table>
                <tr>
                    <td>
                        <div class="boton" onclick="listarPersonas()">
                            Listar<br>Todas las<br>Personas
                        </div>
                    </td>
                    <td>
                        <div class="boton" onclick="pedirDocumentoPersona()">
                            Buscar Persona<br>por Número<br>de Documento
                        </div>
                    </td>
                    <td>
                        <div class="boton" onclick="agregarPersona()">
                            Agregar<br>Crear<br>Persona
                        </div>
                    </td>
                    <td>
                        <div class="boton" onclick="actualizarPersona()">
                            Actualizar<br>Datos<br>Persona
                        </div>
                    </td>
                    <td>
                        <div class="boton" onclick="eliminarPersonaDocumento()">
                            Eliminar<br>Persona
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <% 
            String peticion = null; 
            peticion = request.getParameter("peticion");
            PersonaControl pc = null;
            if(peticion == null){
                out.print("<div id=\"resultados\">");
                out.print("</div> ");
            }else{
                out.print("<div id=\"resultados\">");
                out.print("</div> ");
        %>
        
        <div id="tablas">
        <table class="tabla_personas"> 
        <%
            pc = new PersonaControl();
                switch(peticion){
                    case "listarTodos":
                        ArrayList<Persona> personas = new ArrayList<Persona>();
                        personas = pc.consultarTodos();
                        if(personas == null){
                            out.println("No hay nadie");
                        }else{
        %>
            <tr class="cabecera_tabla">
                <td><b>ID</b></td>
                <td>Nombres</td> 
                <td>Apellidos</td> 
                <td>Tipo<br>Documento</td> 
                <td># Documento</td> 
                <td>Ciudad<br>Residencia</td> 
            </tr>
        <% 
                            for(int i=0; i<personas.size(); i++){
                                out.print("<tr>");
                                Persona p = personas.get(i);
                                out.print("<td>"+p.getId()+"</td>");
                                out.print("<td>"+p.getNombre()+"</td>");
                                out.print("<td>"+p.getApellido()+"</td>");
                                out.print("<td>"+p.getTipoDoc()+"</td>");
                                out.print("<td>"+p.getDocumento()+"</td>");
                                out.print("<td>"+p.getResidencia()+"</td>");
                                out.print("</tr>");
                            }
                        }
                    break;
                    case "buscar":
                        String nDoc = request.getParameter("documento");
                        Persona p = pc.consultarID(nDoc);
                        if(p == null){
                            out.print("No hay nadie con ese número de documento");
                        }else{
        %>
        <div id="tablas">
        <table class="tabla_personas"> 
        <tr class="cabecera_tabla">
                <td><b>ID</b></td>
                <td>Nombres</td> 
                <td>Apellidos</td> 
                <td>Tipo<br>Documento</td> 
                <td># Documento</td> 
                <td>Ciudad<br>Residencia</td> 
        </tr>
            <%              out.print("<td>"+p.getId()+"</td>");
                            out.print("<td>"+p.getNombre()+"</td>");
                            out.print("<td>"+p.getApellido()+"</td>");
                            out.print("<td>"+p.getTipoDoc()+"</td>");
                            out.print("<td>"+p.getDocumento()+"</td>");
                            out.print("<td>"+p.getResidencia()+"</td>");
                            out.print("</tr>");
                        }
                    break;
                    case "eliminar":
                        String nDocE = request.getParameter("documento");
                        Persona pE = pc.consultarID(nDocE);
                        if(pE == null){
                            out.print("No hay nadie con ese número de documento");
                        }else{
                            pc.eliminar(pE);
                            out.print("Persona Eliminada");
                        }
                        
                    break;

                    case "agregar":
                        String nombre = request.getParameter("nombre");
                        String apellido = request.getParameter("apellido");
                        String tipoDoc = request.getParameter("tipDoc");
                        String documento = request.getParameter("documento");
                        String ciudad = request.getParameter("ciudad");
                        pc = new PersonaControl();
                        Persona pa = new Persona();
                        pa.setNombre(nombre);
                        pa.setApellido(apellido);
                        pa.setTipoDoc(tipoDoc);
                        pa.setDocumento(documento);
                        pa.setResidencia(ciudad);
                        pc.guardar(pa);
                        
                    break;
                }
        %>
        </table>
        </div>
       <%
            }
        %>
        <br><br>
        
        
    </body>
</html>
