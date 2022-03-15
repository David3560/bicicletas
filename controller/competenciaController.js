const Competencia = require('../model/Competencia')

//mostrar
module.exports.mostrar = (req , res)=>{
    Competencia.find({}, (error, competencias)=>{
        if(error){
            return res.status(500).json({
                message:  'Error  mostrando  las competencias'
            })
        }
        return res.render('./competencias/index', {competencias: competencias})
    })  

}

//crear
module.exports.crear = (req, res)=>{
    const competencia = new Competencia({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha
    
    })

    competencia.save(function(error, competencia){
        if(error){
            return res.status(500).json({
                message: 'error al crear competencia'
            })
        }

        res.redirect('/')
    })

}

//editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const descripcion = req.body.descripcion_editar
    const fecha = req.body.fecha_editar
    Competencia.findByIdAndUpdate(id, {nombre, descripcion, fecha}, (error, evento)=>{
        if(error){
            return res.status(500).json({
                message: 'error al Actualizar una competencia'
            })
        }
        res.redirect('/competencia')
    })
}


//borrar
module.exports.borrar = (req,res)=>{
    const id = req.params.id
    Competencia.findByIdAndRemove(id,(error, competencia)=>{
        if(error){
            return res.status(500).json({
                message:'error al borrar bicis'
            })
        }
        res.redirect('/competencia')

    })
}