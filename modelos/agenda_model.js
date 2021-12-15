const {Schema,model} = require('mongoose');

const agenda_esquema = new Schema({
    fecha:{
        type: "string",
        required:true,
        max:10
    },
    hora:{
        type: "string",
        required:true,
        max:5
    }
})

const agenda_model = model("usuario",agenda_esquema);
exports.agenda_model=agenda_model;