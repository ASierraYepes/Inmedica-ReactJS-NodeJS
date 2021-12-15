const {Schema,model} = require('mongoose');

const eresultado_esquema = new Schema({
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
    },   
    id_examen:{
        type: "number",
        required:true        
    }
})

const eresultado_model = model("usuario",eresultado_esquema);
exports.eresultado_model=eresultado_model;
