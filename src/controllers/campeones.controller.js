const Campeon = require('../models/Campeon.model');
const campeonesController = {};

//Obtener todos los campeones
campeonesController.obtenerCampeones = async (req, res) => {
    const campeones = await Campeon.find();
    res.json(campeones);
};

//Obtener un campeon:
campeonesController.obtenerCampeon = async (req, res) => {
    const campeon = await Campeon.findOne({numcampeon:req.params.numcamp});
    console.log(campeon);
    if (campeon != null) {
        res.json(campeon);
    }else{
        res.json({status:"Not Found"});
    }
};

//Actualizar un campeon
campeonesController.actualizarCampeon = async (req, res) => {
    const updatechamp = await Campeon.findOneAndUpdate({numcampeon:req.params.numcamp}, req.body);
    console.log(updatechamp);
};

//Eliminar un campeon
campeonesController.eliminarCampeon = async (req, res) => {
    const deletechamp = await Campeon.findOneAndDelete({numcampeon:req.params.numcamp});
    console.log(deletechamp);
    if (deletechamp != null) {
        res.json({status:"Producto eliminado"});
    }else{
        res.json({status: "Not Found"});
    }
};

//Insertar un campeon
campeonesController.insertarCampeon = async (req, res) => {
    const campeonInsertado = new Campeon(req.body);
    await campeonInsertado.save();
};

module.exports = campeonesController;