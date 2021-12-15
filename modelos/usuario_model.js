const {Schema,model} = require('mongoose');

const usuario_esquema = new Schema({
    tipo_u:{
        type: "string",
        required:true,
        max:1
    },
    tipo_d:{
        type: "string",
        required:true,
        max:1        
    },
    numero:{
        type: "number",
        required:true,
        unique:true
    },
    email:{
        type: "string",
        required:true,
        max:50
    },
    nombre:{
        type: "string",
        required:true,
        max:50
    },
    clave:{
        type: "string",
        required:true,
        max:20
    },
    direccion:{
        type: "string",
        required:true,
        max:50
    },
    telefono:{
        type: "string",
        required:true,
        max:15
    },
    fecha_n:{
        type: "string",
        required:true,
        max:10
    }        
})

const usuario_model = model("usuario",usuario_esquema);
exports.usuario_model=usuario_model;
