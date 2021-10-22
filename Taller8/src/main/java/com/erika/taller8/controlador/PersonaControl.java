package com.erika.taller8.controlador;

import com.erika.taller8.modelo.Persona;
import com.erika.taller8.controlador.ConexionDB;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class PersonaControl {
    
    public PersonaControl(){
    }
    
    public ArrayList<Persona> consultarTodos() throws SQLException{
        ResultSet resultado = null;
        ConexionDB objCon = new ConexionDB();
        Connection conexion = objCon.conectarse();
        System.out.println("Conexion => "+conexion);
        ArrayList<Persona> personas = null;
        resultado = objCon.consultar(conexion, "select p.id, p.nombres, p.apellidos, t.tipo, p.documento, c.municipio_departamento as ciudad, p.fechaNacimiento as nacimiento, p.email, p.telefono, p.usuario, p.pass from personas as p, tipodocumento as t, ciudades as c where p.id_tipoDocumento=t.id and p.id_lugarResidencia=c.id;");
        if (resultado != null){
            personas = new ArrayList<Persona>();
            while(resultado.next()){
                Persona p = new Persona();
                p.setId(resultado.getInt("id"));
                p.setNombre(resultado.getString("nombres"));
                p.setApellido(resultado.getString("apellidos"));
                p.setTipoDoc(resultado.getString("tipo"));
                p.setDocumento(resultado.getString("documento"));
                p.setResidencia(resultado.getString("ciudad"));
                personas.add(p);
            }
            objCon.cerrarConexion(conexion);
            return personas;
        }else{
            System.out.println("ERROR consultando");
        }
        return personas;
    }
    
    public Persona consultarID(String id) throws SQLException{
        ResultSet resultado = null;
        ConexionDB objCon = new ConexionDB();
        Connection conexion = objCon.conectarse();
        System.out.println("Conexion => "+conexion);
        Persona p = null;
        resultado = objCon.consultar(conexion, "select p.id, p.nombres, p.apellidos, t.tipo, p.documento, c.municipio_departamento as ciudad, p.fechaNacimiento as nacimiento, p.email, p.telefono, p.usuario, p.pass from personas as p, tipodocumento as t, ciudades as c where p.id_tipoDocumento=t.id and p.id_lugarResidencia=c.id and p.documento='"+id+"';");
        if (resultado.next()){
            p = new Persona();
            p.setId(resultado.getInt("id"));
            p.setNombre(resultado.getString("nombres"));
            p.setApellido(resultado.getString("apellidos"));
            p.setTipoDoc(resultado.getString("tipo"));
            p.setDocumento(resultado.getString("documento"));
            p.setResidencia(resultado.getString("ciudad"));
        }else{
            System.out.println("No hay persona con ese documento");
        }
        objCon.cerrarConexion(conexion);
        return p;
    }
    
    public void guardar(Persona per){
        ConexionDB objCon = new ConexionDB();
        Connection conexion = objCon.conectarse();
        System.out.println("Conexion => "+conexion);
        objCon.insertar_actualizar_eliminar(conexion, "INSERT INTO Personas (nombres, apellidos, id_tipoDocumento, documento, id_lugarResidencia) VALUES ('"+per.getNombre()+"', '"+per.getApellido()+"', '"+per.getTipoDoc()+"', '"+per.getDocumento()+"', '"+per.getResidencia()+"');");
        System.out.println("Query => "+"INSERT INTO Personas (nombres, apellidos, id_tipoDocumento, documento, id_lugarResidencia) VALUES ('"+per.getNombre()+"', '"+per.getApellido()+"', '"+per.getTipoDoc()+"', '"+per.getDocumento()+"', '"+per.getResidencia()+"');");
    }
    
    public void modificar(Persona per){
        
    }
    
    public void eliminar(Persona per){
        int idE = per.getId();
        ConexionDB objCon = new ConexionDB();
        Connection conexion = objCon.conectarse();
        System.out.println("Conexion => "+conexion);
        objCon.insertar_actualizar_eliminar(conexion, "DELETE FROM Personas WHERE id="+idE);
    }
}
