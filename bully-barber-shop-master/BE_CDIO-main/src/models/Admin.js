const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    tenDangNhap: {
        type: String,
        required: true,
    },
    matKhau: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("admin", AdminSchema);