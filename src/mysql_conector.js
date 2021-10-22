import mysql from 'mysql'

//Crear la Conexion:

const conector = mysql.createConnection({
    host: 'localhost',
    user: 'luis',
    password: '55555',
    database: 'agenda_contactos'
})

const conectar = ()=>{
    conector.connect(err => {
        if (err) throw err
        console.log('Conectado')
    })
}


export {conectar}