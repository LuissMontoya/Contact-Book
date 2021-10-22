import mysql from "mysql";
let todos
//Crear la Conexion:

const conector = mysql.createConnection({
  host: "localhost",
  user: "luis",
  password: "55555",
  database: "agenda_contactos",
});

const conectar = () => {
  conector.connect((err) => {
    if (err) throw err;
    console.log("Conectado a la Base de Datos");
  });
};

const agregarContacto = (numero, nombre) => {
  const sql = `INSERT INTO agenda (id_contacto, numero, nombre) VALUES (${null},${numero},"${nombre}")`;
  conector.query(sql, function (err, resultado, filed) {
    if (err) throw err;
    console.log(resultado);
  });
};

const obtenerContactos = ()=>{
    const sql ='SELECT * FROM agenda'
    conector.query(sql, function(err, result, field){
        todos = result
    })
    return todos
}

const borrarContacto= id =>{
    const sql = `DELETE FROM agenda WHERE id_contacto=${id}`
    conector.query(sql)
}

export {agregarContacto, obtenerContactos, borrarContacto };
