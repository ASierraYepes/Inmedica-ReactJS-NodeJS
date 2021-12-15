const {Schema,model} = require('mongoose');

const resultado_esquema = new Schema({
    codigo:{
        type: "string",
        required:true,
        max:20
    },
    descripcion_valor:{
        type: "string",
        required:true,
        max:20     
    },
    resultado:{
        type: "number",
        required:true,
        unique:true
    },
    rango_i:{
        type: "numero",
        required:false
    },
    rango_f:{
        type: "number",
        required:false
    },
    unidad:{
        type: "string",
        required:true,
        max:20
    }
})

const detalleexamen_model = model("usuario",detalleexamen_esquema);
exports.detalleexamen_model=detalleexamen_model;