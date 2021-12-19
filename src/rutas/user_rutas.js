//const {compare} = require("bcrypt"); //Encriptar contraseñas
const { Router }= require("express");
const user_rutas = Router();
const {user_model} = require("../modelos/user_model");
// const { sing } = require("jsonwebtoken");
// const {guardian} = require("../guardian/guardian");

user_rutas.post("/registrar",function(req,res){
    // Recuperar los Datos que vienen desde el Front
    const datos = req.body;
    const doc = datos.doc;
    const typeDoc = datos.typeDoc;
    //user_model.findOne({doc},function(error, usuario){
    user_model.findOne({$and:[{doc},{typeDoc}]},function(error,usu){    
        if (usu === null){
            //Guardar esos datos
            const user = new user_model(datos);
            user.save(function(err){
                if(err){
                    res.status(500).send({estado:"ERROR",msg:"Usuario ya se encuentra registrado!!!"});
                    return false;
                }
                return res.status(200).send({estado:"OK",msg:"Usuario registrado exitosamente!"});
            })        
        }
        else{  
            if (usuario !== null){
                res.send({status:"Ok",msg:"Usuario ya se encuentra Registrado"});            
            }
            // else{
            //     res.send({status:"ERROR!!!",msg:"El usuario no se registro"});
            // }     
        }
    })
    
});

// Consultar Usuario 
user_rutas.get("/consulta_u",function(req,res){
    // Capturar lo que esta en la caja de texto: la de Nombre
    const {doc}=req.body;
    const {typeDoc}=req.body;
    // Buscar ese jugador en la BD
    console.log(doc,typeDoc);
    user_model.findOne({$and:[{doc},{typeDoc}]},function(error,usu){
        if (error){
            res.send({status:"ERROR!!!",msg:"Usuario no encontrado"});
            return false;        
        }
        else{
            if (usu !== null){
                res.send({status:"Ok",msg:"Usuario encontrado",dato:usu});            
            }
            else{
                res.send({status:"ERROR!!!",msg:"Usuario no Encontrado"});
            }
        }
    })
    // Mandar mensaje a cliente SI lo encontre o NO  (res.send)
});

exports.user_rutas=user_rutas;