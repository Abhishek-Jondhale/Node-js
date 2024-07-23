const express = require('express');
const BankService = require('../services/BankAccountService')
const BankRoute = express.Router();
const uuid=require('uuid')
BankRoute.post('/create', (req, res) => {
   
    const uniqueId = uuid.v4();
    const shortid= uniqueId.substring(0,6)
        const dataToSave = {
            id: uniqueId,
            id:shortid,
            ...req.body
        };
    BankService.save(dataToSave).then(data => {
        res.status(201).json({
            message: 'New BankDetails created.',
            code: 201,
            status: 'success',
            data: data
        })
    })
})


BankRoute.get('/getAll', (req, res) => {
    BankService.getAllBankDetails().then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully get all Bank Details.',
                code: 200,
                status: 'success',
                data: data
            })
        } else {
            res.status(400).json({
                message: 'BankDetails Not Found',
                code: 400,
                status: 'failed'
            })
        }
    })
})

BankRoute.get('/getById/:AccountNumber', (req, res) => {
    const AccountNumber = req.params.AccountNumber;

    BankService.getBankDetailsByNumber(AccountNumber).then(data => {
        if (data) {
            res.status(200).json({
                message: 'successfully get BankDetails by id.',
                code: 200,
                status: 'success',
                data: data
            })
        } else {
            res.status(400).json({
                message: 'BankDetails Not Found',
                code: 400,
                status: 'failed'
            })
        }
    })
})

BankRoute.put('/update/:AccountNumber', (req, res) => {
    const AccountNumber = req.params.AccountNumber;
    const newBankDetails = req.body;

    BankService.update(AccountNumber, newBankDetails).then(data => {
       if(data){
        res.status(200).json({
            message: 'successfully updated BankDetails',
            code: 200,
            status: 'success',
            data: data
        })
       }else{
        res.status(400).json({
            message: 'BankDetails Not found to update.',
            code: 400,
            status: 'failed'
        })
       }
    })
})

BankRoute.delete('/delete/:AccountNumber', (req, res) => {
    const AccountNumber = req.params.AccountNumber;

    BankService.delete(AccountNumber).then(data => {
       if(data){
        res.status(200).json({
            message: 'successfully deleted the BankDetails.',
            code: 200,
            status: 'success',
            data: data
        })
       }else{
        res.status(400).json({
            message: 'BankDetails Not found to delete',
            code: 400,
            status: 'failed'
        })
       }
    })
})

module.exports = BankRoute;