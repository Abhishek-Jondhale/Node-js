const express = require('express');
const Colony = require('../services/ColonyService')
const uuid = require('uuid')
const ColonyRoute = express.Router();

ColonyRoute.post('/create', (req, res) => {

    const uniqueId = uuid.v4();
    const shortid = uniqueId.substring(0, 6)
    const dataToSave = {
        id: uniqueId,
        id: shortid,
        ...req.body
    };


    Colony.save(dataToSave).then(data => {
        res.status(201).json({
            message: 'New Data created.',
            code: 201,
            status: 'success',
            data: data
        });
    });
});


ColonyRoute.get('/getAll', (req, res) => {
    Colony.getAllData().then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully get all Data.',
                code: 200,
                status: 'success',
                data: data
            })
        } else {
            res.status(400).json({
                message: 'Data Not Found',
                code: 400,
                status: 'failed'
            })
        }
    })
})

ColonyRoute.get('/getById/:Id', (req, res) => {
    const Id = req.params.Id;

    Colony.getDataById(Id).then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully get Data by id.',
                code: 200,
                status: 'success',
                data: data
            })
        } else {
            res.status(400).json({
                message: 'Data Not Found',
                code: 400,
                status: 'failed'
            })
        }
    })
})

ColonyRoute.put('/update/:Id', (req, res) => {
    const Id = req.params.Id;
    const newData = req.body;

    Colony.update(Id, newData).then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully updated Data',
                code: 200,
                status: 'success',
                data: data
            })
        } else {
            res.status(400).json({
                message: 'Data Not found to update.',
                code: 400,
                status: 'failed'
            })
        }
    })
})

ColonyRoute.delete('/delete/:Id', (req, res) => {
    const Id = req.params.Id;

    Colony.delete(Id).then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully deleted the Data.',
                code: 200,
                status: 'success',
                data: data
            })
        } else {
            res.status(400).json({
                message: 'Data Not found to delete',
                code: 400,
                status: 'failed'
            })
        }
    })
})

module.exports = ColonyRoute;



