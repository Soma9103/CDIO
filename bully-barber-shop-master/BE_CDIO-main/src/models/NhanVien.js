const mongoose = require('mongoose');

const NhanVienSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    hoTen: {
        type: String,
        required: true,
    },
    soDienThoai: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("nhanvien", NhanVienSchema);
