const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventoSchema = new Schema ({
    nombre: String,
    descripcion: String,
    fecha: String
}, {versionKey:false})

module.exports = mongoose.model('eventos', eventoSchema)