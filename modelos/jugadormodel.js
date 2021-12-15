const {Schema,model} = require('mongoose');

const jugadoresquema = new Schema({
    nombre:{
        type: "string",
        unique:true,
        required:true
    },
    posicion:{
        type: "string",
        required:true
    },
    numero:{
        type: "number",
        required:true
    }
})

const jugadormodel = model("jugadores",jugadoresquema);
exports.jugadormodel=jugadormodel;