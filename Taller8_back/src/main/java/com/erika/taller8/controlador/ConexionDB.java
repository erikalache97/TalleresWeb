package com.erika.taller8.controlador;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ConexionDB {
    private Connection conexion;
    private ResultSet resultado;
    private Statement estamento;
    
    public ConexionDB() {
        System.out.println("Objeto conexion creado");
    }
    
    public Connection conectarse(){
        String host = "localhost";
        String port = "3306";
        String db = "taller8";
        String url = "jdbc:mysql://" + host + ":" + port + "/" + db;
        String username = "root"; // usuario del MySQL
        String password = "root1234"; // contrasena del MySQL
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
            System.out.println(" ** Error con el driver => " + ex);
        }
        try {
            conexion = DriverManager.getConnection(url, username, password);
            System.out.println(" ## Conexión exitosa => "+conexion);
        } catch (SQLException ex) {
            System.out.println(" ** Error con la conexión => " + ex);
        }
        System.out.println("Devolviendo conexion "+conexion);
        return conexion;
    }
    
    public Connection obtenerConexion(){
        return conexion;
    }
    
    public void cerrarConexion(Connection c){
        try {
            c.close();
        } catch (SQLException ex) {
            Logger.getLogger(ConexionDB.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println(" ** Error al cerrar la conexión => " + ex);
        }
    }
    
    // CRUD
    
    // Obtener datos -> Consultar -> Select
    public ResultSet consultar(Connection c, String query){
        resultado = null;
        try {
            estamento = c.createStatement();
            resultado = estamento.executeQuery(query);
            
        } catch (SQLException ex) {
            Logger.getLogger(ConexionDB.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println(" ** Error al hacer la consulta => "+ex);
        }
        return resultado;
    }
    
    // Insertar datos -> Insert
    public void insertar_actualizar_eliminar(Connection c, String query){
        try {
            estamento = c.createStatement();
            estamento.executeUpdate(query);
            
        } catch (SQLException ex) {
            Logger.getLogger(ConexionDB.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println(" ** Error al hacer la modificacion en la DB (insertar, actualizar, eliminar) => "+ex);
        }
    }
}
