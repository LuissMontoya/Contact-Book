import express from "express";
import {
  agregarContacto,
  obtenerContactos,
  borrarContacto,
} from "./src/mysql_conector.js";
let todos;

const app = express(); //Iniciar Express

//Iniciando Servidor
app.listen("4000", function () {
  console.log("Aplicación iniciada en el puerto 4000");
});

//Configuracion de Pug
app.set("views", "./vistas");
app.set("view engine", "pug");

//configuracion de archivos estaticos
app.use(express.static("./vistas"));
app.use(express.static("./src"));
app.use(express.static("./css"));

//Rutas
app.get("/", function (req, res) {
  /*res.send('Aplicación Iniciada')*/
  //conectar()
  todos = obtenerContactos();
  res.render("index", { titulo: "Aplicación de Contactos", contactos: todos });
});

//Ruta de Agregar
app.get("/agregar/:nombre/:numero", function (req, res) {
  let nombre = req.params.nombre;
  let numero = req.params.numero;
  agregarContacto(numero, nombre);
  res.redirect("/");
  console.log(nombre, numero);
});

//Ruta de Borrar
app.get("/borrar/:id", function (req, res) {
  let id = req.params.id;
  console.log(id);
  borrarContacto(id);
  res.redirect("/");
});
