import express from 'express'
import {conectar} from './src/mysql_conector.js'



const app = express() //Iniciar Express

//Iniciando Servidor
app.listen('4000', function(){
    console.log('Aplicación iniciada en el puerto 4000')
})

//Configuracion de Pug
app.set('views','./vistas')
app.set('view engine','pug')

//configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))



//Rutas
app.get('/', function(req, res){
    /*res.send('Aplicación Iniciada')*/
    conectar()
    res.render('index', {titulo:'Aplicación de Contactos', dato:'cualquier texto'})
})