const {Schema,model} = require('mongoose');

const citaexamen_esquema = new Schema({
     tipo_d:{
        type: "string",
        required:true,
        max:1        
    },
    numero:{
        type: "number",
        required:true
    },
    fecha:{
        type: "string",
        required:true,
        max:10
    },
    hora:{
        type: "string",
        required:true,
        max:5
    },
    codigo:{
        type: "string",
        required:true,
        max:20
    }   
})

const citaexamen_model = model("usuario",citaexamen_esquema);
exports.citaexamen_model=citaexamen_model;
