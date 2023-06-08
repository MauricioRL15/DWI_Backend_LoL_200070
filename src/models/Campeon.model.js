const {Schema, model} = require('mongoose');
const championSchema = new Schema({
    numcampeon: {
        type : String,
        require: true,
        unique: true
    },
    nombre: String,
    descripcion: String,
    rol: String,
    numaspectos: Number,
    nivelmaestria: String,
    dificultad: String,
    pasiva: String,
    habilidales: Array

},{
    versionKey:false,
    timestamps: true
});

module.exports = model('LeagueofLegend', championSchema);