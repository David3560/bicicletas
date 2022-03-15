const Ruta = require('../model/Ruta')

//mostrar
module.exports.mostrar = (req, res)=>{
    Ruta.find({}, (error, rutas)=>{
        if(error){
            return res.status(500).json({
                message:'Error mostrando las rutas '
            })
        }

        return res.render('./rutas/index', {rutas : rutas})
    })
}

//editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const descripcion = req.body.descripcion_editar
    const fecha = req.body.fecha_editar
    Ruta.findByIdAndUpdate(id, {nombre, descripcion, fecha}, (error, evento)=>{
        if(error){
            return res.status(500).json({
                message: 'error al Actualizar una ruta'
            })
        }
        res.redirect('/Ruta')
    })
}

//crear
module.exports.crear = (req, res)=>{
    // console.log(req.body)
    const ruta = new Ruta({
        nombre: req.body.nombre ,
        descripcion: req.body.descripcion ,
        fecha: req.body.fecha
    })
    ruta.save(function(error,ruta){
    if(error){
        return res.estatus(500).json({
            message: 'error al crear usuario'
        })
    }
        res.redirect('/')
    }
)} 
//editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const descripcion = req.body.descripcion_editar
    const fecha = req.body.fecha_editar
    Ruta.findByIdAndUpdate(id, {nombre, descripcion, fecha}, (error, evento)=>{
        if(error){
            return res.status(500).json({
                message: 'error al Actualizar una ruta'
            })
        }
        res.redirect('/ruta')
    })
}

//borrar
module.exports.borrar = (req,res)=>{
    const id = req.params.id
    Ruta.findByIdAndRemove(id,(error, ruta)=>{
        if(error){
            return res.status(500).json({
                message:'error al borrar bicis'
            })
        }
        res.redirect('/ruta')

    })
}





























