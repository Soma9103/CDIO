const DatLich = require('../models/DatLich');

class DatLichController {
    // Xem tất cả lịch đặt
    async getAllDatLich(req, res) {
        try {
            const datLich = await DatLich.find();
            res.json(datLich);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Xem một lịch đặt cụ thể
    async getDatLich(req, res) {
        const id = req.body.id;
        try {
            const datLich = await DatLich.findById(id);
            if (!datLich) {
                return res.status(404).json({ message: "Không tìm thấy lịch đặt" });
            }
            res.json(datLich);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Thêm lịch đặt mới
    async createDatLich(req, res) {
        try {
            const newDatLich = new DatLich(req.body);
            await newDatLich.save();
            res.status(201).json(newDatLich);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Sửa thông tin lịch đặt
    async updateDatLich(req, res) {
        const id = req.body.id;
        try {
            await DatLich.findByIdAndUpdate(id, req.body);
            res.json({ message: 'Thông tin lịch đặt đã được cập nhật' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Xóa lịch đặt
    async deleteDatLich(req, res) {
        const id = req.body.id;
        try {
            await DatLich.findByIdAndDelete(id);
            res.json({ message: 'Lịch đặt đã được xóa thành công' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new DatLichController();
