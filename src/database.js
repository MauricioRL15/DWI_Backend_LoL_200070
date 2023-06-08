const mongoose = require('mongoose');
//Conexión a mongodb atlas
mongoose.connect("mongodb+srv://mauwu:Mauricio2002@cluster8a.bvempbh.mongodb.net/RiotGames?retryWrites=true&w=majority").then(db => console.log("Servidor conectado a Mongo")).catch(err => console.error(err));