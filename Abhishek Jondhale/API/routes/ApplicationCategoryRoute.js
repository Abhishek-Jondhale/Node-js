const express = require('express');
const ApplicationService = require('../services/ApplicationCategoryService');
const ApplicationRoute = express.Router();
const uuid=require('uuid')


ApplicationRoute.post('/create', (req, res) => {
    
    const uniqueId = uuid.v4();
    const shortid= uniqueId.substring(0,6)
        const dataToSave = {
            id: uniqueId,
            id:shortid,
            ...req.body
        };
   
    ApplicationService.save(dataToSave).then(data => {
        res.status(201).json({
            message: "Successfully created new application.",
            status: "success",
            code: 201,
            data: data
        })
    })
})

ApplicationRoute.get('/getAll', (req, res) => {
    ApplicationService.getAllapplication().then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully get all blogs.',
                code: 200,
                status: 'success',
                data: data
            })
        } else {
            res.status(400).json({
                message: 'failed to get all blogs.',
                code: 400,
                status: 'failed'
            })
        }
    })
})


ApplicationRoute.get('/getById/:ApplicationId', (req, res) => {
    const ApplicationId = req.params.ApplicationId;

    ApplicationService.getApplicationById(ApplicationId).then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully get applcation by id.',
                code: 200,
                status: 'success',
                data: data
            })
        } else {
            res.status(400).json({
                message: 'failed to get application by id.',
                code: 400,
                status: 'failed'
            })
        }
    })
})

ApplicationRoute.put('/update/:ApplicationId', (req, res) => {
    const ApplicationId = req.params.ApplicationId;
    const newApplication = req.body;

    ApplicationService.update(ApplicationId, newApplication).then(data => {
        res.status(200).json({
            message: 'successfully updated application',
            code: 200,
            status: 'success',
            data: data
        })
    })
})

ApplicationRoute.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    ApplicationService.delete(id).then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully deleted the application.',
                code: 200,
                status: 'success',
                data: data
            })
        } else {
            res.status(400).json({
                message: 'application Not found to delete.',
                code: 400,
                status: 'failed'
            })
        }
    })
})

module.exports = ApplicationRoute;
