const mongoose = require('mongoose');

const DatLichSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    idKhachHang: {
        type: String,
        required: true,
    },
    soLuong: {
        type: Number,
        required: true,
    },
    ngayDatLich: {
        type: Date,
        required: true,
    },
    gio: {
        type: String,
        required: true,
    },
    loaiDichVu: {
        type: String,
        required: true,
    },
    idNhanVien: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("datlich", DatLichSchema);
