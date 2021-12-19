const { Router }= require("express");
const agenda_rutas = Router();
const {agenda_model} = require("../modelos/agenda_model");
//ok
agenda_rutas.post("/grabar_a",function(req,res){
    // Recuperar los Datos que vienen desde el Front
    const datos = req.body;
    const fecha = datos.fecha;
    const hora  = datos.hora;
    const estado = datos.estado;
    agenda_model.findOne({$and:[{fecha},{hora}]},function(error, agenda){
        if (agenda === null){
            //Guardar esos datos
            const agendar = new agenda_model(datos);
            agendar.save(function(err){
                if(err){
                    res.status(500).send({estado:"ERROR",msg:"La fecha y la hora ya se encuentra registrado!!!"});
                    return false;
                }
                return res.status(200).send({estado:"OK",msg:"Se agrego a agenda La fecha y Hora exitosamente!"});
            })        
        }
        else{  
            if (agenda !== null){
                res.send({status:"Ok",msg:"La Fecha y Hora ya se encuentra Registrado"});            
            }
            // else{
            //     res.send({status:"ERROR!!!",msg:"El usuario no se registro"});
            // }     
        }
    })
    
});
//ok
agenda_rutas.get("/consulta_a",function(req,res){
    // Capturar lo que esta en la caja de texto: la de Nombre
    const {fecha}=req.body;
    const {hora}=req.body;
    // Buscar ese jugador en la BD
    //console.log(num,typeDoc);
    agenda_model.findOne({$and:[{fecha},{hora}]},function(error,agenda){
        if (error){
            res.send({status:"ERROR!!!",msg:"Hora y Fecha no encontrado"});
            return false;        
        }
        else{
            if (agenda !== null){
                res.send({status:"Ok",msg:"Hora y Fecha encontrado",dato:agenda});            
            }
            else{
                res.send({status:"ERROR!!!",msg:"Hora y Fecha no Encontrado"});
            }
        }
    })
    // Mandar mensaje a cliente SI lo encontre o NO  (res.send)
});
//ok
agenda_rutas.get("/listar_a",function(req,res){

    agenda_model.find({},function(error,agenda){
        //console.log(usu);
        if(error){
            res.send({status:"Error",msg:"La tabla no contiene usuarios"})
            return false;
        }
        else {
            var j = [];
            agenda.forEach(function(a){
                j.push(a);
                console.log(a);
            })
            res.send(j);
            return true;
        }     
    })
    // Mandar mensaje a cliente SI lo encontre o NO  (res.send)
});

//userDashboard_rutas.delete("/eliminar/:doc", function(req,res){
//    user_model.deleteOne({doc: req.params.doc}).then((resultado) => {
//        res.status(200).json({resultado});
//    })
//})

agenda_rutas.post("/eliminar_a", function(req,res){
    const {fecha}=req.body;
    const {hora}=req.body;
    //console.log(nombre);
    // Buscar ese jugador en la BD
    agenda_model.deleteOne({$and:[{fecha},{hora}]},function(error,agenda){
    //jugadormodel.deleteOne({nombre},function(error,jug){
    //console.log(jug);
        if (agenda.deletedCount==0 || error){
            return res.status(401).send({estado:"Error!!!",msg:"Fecha y hora NO Eliminado"});
        }
        return res.status(200).send({estado:"OK",msg:"Fecha y Hora Eliminado"});
    })
})

agenda_rutas.post("/actualizar_a", function(req, res) {
    const datos  = req.body;
    const hora = datos.hora;
    const fecha = datos.fecha;
    //let body = req.body;
    agenda_model.updateOne({$and:[{fecha},{hora}]}, {
            $set: {
                estado : datos.estado
            }
        },
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo modificar estado de la agenda',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    info: info
                })
            }
        }
    )
});

exports.agenda_rutas=agenda_rutas;