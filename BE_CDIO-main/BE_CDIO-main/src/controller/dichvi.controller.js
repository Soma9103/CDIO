const DichVu = require('../models/DichVu'); // Import the service model

class ServiceController {
    // Method to create a new service
    async createService(req, res) {
        try {
            const service = await DichVu.create(req.body); // Using the static method
            res.status(201).json(service);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Method to update a service
    async updateService(req, res) {
        try {
            const { id } = req.params;
            const updatedService = await DichVu.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedService) {
                return res.status(404).json({ message: "Service not found." });
            }
            res.json(updatedService);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Method to delete a service
    async deleteService(req, res) {
        try {
            const { id } = req.params;
            const deletedService = await DichVu.findByIdAndDelete(id);
            if (!deletedService) {
                return res.status(404).json({ message: "Service not found." });
            }
            res.json({ message: "Service deleted successfully." });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Method to retrieve all services
    async getAllServices(req, res) {
        try {
            const services = await DichVu.find();
            res.json(services);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ServiceController(); // Export an instance of the ServiceController class
