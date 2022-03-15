const mongoose = require('mongoose')
const url = 'mongodb://localhost/proyectobi'

mongoose.connect(url, {
    
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar mongoDB'))
db.once('open', function callback(){
    console.log("¡CONECTADO A MONGODB!")
})

module.exports = db