const mongoose = require('mongoose');

const DichVuSchema = new mongoose.Schema({
    
    tenDichVu: {
        type: String,
        required: true,
    },
    giaCa: {
        type: Number,
        required: true,
    },
    imageLink: {
        type: String,
    },
    
});

module.exports = mongoose.model("dichvu", DichVuSchema);