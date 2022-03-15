const Evento = require('../model/Evento')

//mostrar
module.exports.mostrar = (req, res)=>{
    Evento.find({}, (error, eventos)=>{
        if(error){
            return res.status(500).json({
                message:'error mostrando los eventos'
            })
        }
        return res.render('./eventos/index', {eventos: eventos})
    })
}

//crear
module.exports.crear = (req, res)=>{
    // console.log(req.body)
    
    const evento = new Evento({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha
    })
    evento.save(function(error,evento){
        if(error){
            return res.status(500).json({
                message: 'error al crear un evento'
            })
        }
        res.redirect('/evento')
    })
}
//editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const descripcion = req.body.descripcion_editar
    const fecha = req.body.fecha_editar
    Evento.findByIdAndUpdate(id, {nombre, descripcion, fecha}, (error, evento)=>{
        if(error){
            return res.status(500).json({
                message: 'error al Actualizar un evento'
            })
        }
        res.redirect('/evento')
    })
}

//eliminar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Evento.findByIdAndRemove(id, (error, evento)=>{
        if(error){
            return res.status(500).json({
                message: 'error al eliminar un evento'
            })
        }
        res.redirect('/evento')
    })
}

//borrar
module.exports.borrar = (req,res)=>{
    const id = req.params.id
    Evento.findByIdAndRemove(id,(error, evento)=>{
        if(error){
            return res.status(500).json({
                message:'error al borrar bicis'
            })
        }
        res.redirect('/evento')

    })
}