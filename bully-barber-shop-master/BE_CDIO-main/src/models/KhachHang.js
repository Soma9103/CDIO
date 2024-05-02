const mongoose = require('mongoose');

const KhachHangSchema = new mongoose.Schema({
    
    soDienThoai: {
        type: String,
        required: true,
    },
    hoTen: {
        type: String,
        required: true,
    },
    matKhau: {
        type: String,
        required: true,
    },
    tenDangNhap: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("KhachHang", KhachHangSchema);