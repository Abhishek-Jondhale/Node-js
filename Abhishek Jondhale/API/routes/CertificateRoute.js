const express = require('express');
const certificate = require('../services/CertificateService')
const CertificateRoute = express.Router();
const uuid=require('uuid')
CertificateRoute.post('/create', (req, res) => {
  
    const uniqueId = uuid.v4();
    const shortid= uniqueId.substring(0,6)
        const dataToSave = {
            id: uniqueId,
            id:shortid,
            ...req.body
        };
    certificate.save(dataToSave).then(data => {
        res.status(201).json({
            message: 'New Data created.',
            code: 201,
            status: 'success',
            data: data
        })
    })
})


CertificateRoute.get('/getAll', (req, res) => {
    certificate.getAllData().then(data => {
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

CertificateRoute.get('/getById/:Id', (req, res) => {
    const Id = req.params.Id;

    certificate.getDataById(Id).then(data => {
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

CertificateRoute.put('/update/:Id', (req, res) => {
    const Id = req.params.Id;
    const newData = req.body;

    certificate.update(Id, newData).then(data => {
       if(data){
        res.status(200).json({
            message: 'successfully updated Data',
            code: 200,
            status: 'success',
            data: data
        })
       }else{
        res.status(400).json({
            message: 'Data Not found to update.',
            code: 400,
            status: 'failed'
        })
       }
    })
})

CertificateRoute.delete('/delete/:Id', (req, res) => {
    const Id = req.params.Id;

    certificate.delete(Id).then(data => {
       if(data){
        res.status(200).json({
            message: 'successfully deleted the Data.',
            code: 200,
            status: 'success',
            data: data
        })
       }else{
        res.status(400).json({
            message: 'Data Not found to delete',
            code: 400,
            status: 'failed'
        })
       }
    })
})

module.exports = CertificateRoute;