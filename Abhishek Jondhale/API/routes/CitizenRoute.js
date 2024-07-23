const express = require('express');
const CitizenService = require('../services/CitizenService');
const CitizenRoute = express.Router();
const uuid=require('uuid');
CitizenRoute.post('/create', (req, res) => {
   
    const uniqueId = uuid.v4();
    const shortid= uniqueId.substring(0,6)
        const dataToSave = {
            id: uniqueId,
            id:shortid,
            ...req.body
        };
    
    CitizenService.save(dataToSave).then(data => {
        res.status(201).json({
            message: 'New Citizen created.',
            code: 201,
            status: 'success',
            data: data
        });
    });
});


CitizenRoute.get('/getAll', (req, res) => {
    CitizenService.getAllCitizen().then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully get all users.',
                code: 200,
                status: 'success',
                data: data
            });
        } else {
            res.status(400).json({
                message: 'Users Not Found',
                code: 400,
                status: 'failed'
            });
        }
    });
});

CitizenRoute.get('/getById/:CitizenId', (req, res) => {
    const CitizenId = req.params.CitizenId;

    CitizenService.getCitizenById(CitizenId).then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully get Citizen by id.',
                code: 200,
                status: 'success',
                data: data
            });
        } else {
            res.status(400).json({
                message: 'Citizen Not Found',
                code: 400,
                status: 'failed'
            });
        }
    });
});

CitizenRoute.put('/update/:CitizenId', (req, res) => {
    const CitizenId = req.params.CitizenId;
    const newCitizen = req.body;

    CitizenService.update(CitizenId, newCitizen).then(data => {
       if(data){
        res.status(200).json({
            message: 'successfully updated Citizen',
            code: 200,
            status: 'success',
            data: data
        })
       }else{
        res.status(400).json({
            message: 'Citizen Not found to update.',
            code: 400,
            status: 'failed'
        })
       }
    })
})

CitizenRoute.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    CitizenService.delete(id).then(data => {
       if(data){
        res.status(200).json({
            message: 'successfully deleted the Citizen.',
            code: 200,
            status: 'success',
            data: data
        })
       }else{
        res.status(400).json({
            message: 'Citizen Not found to delete',
            code: 400,
            status: 'failed'
        })
       }
    })
})

module.exports = CitizenRoute;