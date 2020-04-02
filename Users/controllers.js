const express = require('express');

const UsersService = require('./services.js');
const {
    validateFields
} = require('../utils');

const router = express.Router();

router.post('/register', async (req, res, next) => {
    const {
        name,
        surname,
        password,
        email,
        phone
    } = req.body;

    const fieldsToBeValidated = {
        name: {
            value: name,
            type: 'alpha'
        },
        surname: {
            value: name,
            type: 'alpha'
        },
        password: {
            value: password,
            type: 'ascii'
        },
        email:{
            value: password,
            type: 'ascii'
        },
        phone:{
            value: password,
            type: 'ascii'
        }
    };


    try {
        validateFields(fieldsToBeValidated);
        await UsersService.add(name, surname, password, email, phone);
        res.status(201).end();
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    res.json(await UsersService.getUsers());
});

module.exports = router;