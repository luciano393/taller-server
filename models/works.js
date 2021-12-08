const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const worksSchema = new Schema({
    marca: {
        type: String,
        trim: true
    },
    modelo: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true,
    },
    creado_en: Date,
    actualizado_en: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Works', worksSchema);