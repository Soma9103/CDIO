const KhachHang = require('../models/KhachHang');

class KhachHangController {
    async getAllCustomers(req, res) {
        try {
            const customers = await KhachHang.find();
            res.json(customers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createCustomer(req, res) {
        try {
            const newCustomer = new KhachHang(req.body); // Assuming req.body contains the necessary fields for creating a customer
            await newCustomer.save();
            res.status(201).json(newCustomer);
        } catch (error) {
            console.log(req.body);
            res.status(400).json({ message: error.message });
        }
    }

    async updateCustomer(req, res) {
        const id = req.body.id;
        try {
            await KhachHang.findByIdAndUpdate(id, req.body);
            res.json({ message: 'Customer updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteCustomer(req, res) {
        const id = req.body.id;
        const query = { _id:id };
        try {
            const result = await KhachHang.deleteOne(query);
            if(result.deletedCount === 1)
            res.json({ message: 'Customer deleted successfully' });
            else{
            res.json({err:"khong ti thay id"});
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new KhachHangController();
