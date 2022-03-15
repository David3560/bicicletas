const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bicicletaSchema = new Schema({
    marca: String,
    tipo: String,
    color: String,
    estado: String,
    altura: Number,
    longitud: Number
}, {versionKey:false})

module.exports = mongoose.model('bicicletas', bicicletaSchema)