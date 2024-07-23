const express = require('express');
const apiRoute = express.Router();
const apiServices = require("../service/apiService");

// GET - Read all data
apiRoute.get("/", async (req, res) => {
    try {
        const data = await apiServices.getAllData();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(Error);
    }
});

// POST - Create data
apiRoute.post("/save", async (req, res) => {
    try {
        const newData = req.body;
        const createdData = await apiServices.save(newData); // Call saveData method from apiServices
        res.status(201).json(createdData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT - Update data
apiRoute.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        const updatedData = await apiServices.updateData(id, newData);
        res.json(updatedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - Delete data
apiRoute.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await apiServices.deleteData(id);
        res.json({ message: "Data deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = apiRoute;
