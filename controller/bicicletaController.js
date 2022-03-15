const Bicicleta = require('../model/Bicicleta')

//mostrar
module.exports.mostrar = (req, res)=>{
    Bicicleta.find({}, (error, bicicletas)=>{
        if(error){
            return res.status(500).json({
                message: 'error mostrando las bicicletas'
            }) 
        }

        return res.render('./bicicletas/index', {bicicletas: bicicletas})
    })
}

//crear
module.exports.crear = (req,res)=>{
    // console.log(req.body)

    const bicicleta = new Bicicleta({
        marca: req.body.marca,
        tipo: req.body.tipo,
        color: req.body.color,
        estado: req.body.estado,
        altura: req.body.altura,
        longitud: req.body.longitud
    })
    bicicleta.save(function(error,bicicleta){
        if(error){
            return res.status(500).json({
                message:'error al crear bicis'
            })
        }
        res.redirect('/bicicleta')
    })
}

//editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const marca = req.body.marca_editar
    const tipo = req.body.tipo_editar
    const color = req.body.color_editar
    const estado = req.body.estado_editar
    const altura = req.body.altura_editar
    const longitud = req.body.longitud_editar

    Bicicleta.findByIdAndUpdate(id, {marca, tipo, color, estado, altura, longitud}, (error, evento)=>{
        if(error){
            return res.status(500).json({
                message: 'error al Actualizar una competencia'
            })
        }
        res.redirect('/bicicleta')
    })
}

//borrar
module.exports.borrar = (req,res)=>{
    const id = req.params.id
    Bicicleta.findByIdAndRemove(id,(error, bicicleta)=>{
        if(error){
            return res.status(500).json({
                message:'error al borrar bicis'
            })
        }
        res.redirect('/bicicleta')

    })
}