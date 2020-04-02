const express = require('express');

const AdsService = require('./services.js');

const {
    validateFields
} = require('../utils');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const {
        title,
        user_id,
        description,
        category
    } = req.body;


    const fieldsToBeValidated = {
        title: {
            value: title,
            type: 'ascii'
        },
        user_id: {
            value: user_id,
            type: 'ascii'
        },
        description:{
            value: description,
            type: 'ascii'
        },
        category:{
            value: category,
            type: 'categories'
        }
    };

    try {
        validateFields(fieldsToBeValidated);
        await AdsService.add(title, user_id, description, category);
        res.status(201).end();
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const ads = await AdsService.getAll();
        res.json(ads);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    const {
        id
    } = req.params;

    const fieldsToBeValidated = {
        id: {
            value: id,
            type: 'ascii'
        }
    };

    try {
        validateFields(fieldsToBeValidated);
        const ad = await AdsService.getById(id);
        res.json(ad);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    const {
        id
    } = req.params;

    const {
        title,
        user_id,
        description,
        category
    } = req.body;


    const fieldsToBeValidated = {
        title: {
            value: title,
            type: 'ascii'
        },
        user_id: {
            value: user_id,
            type: 'ascii'
        },
        description:{
            value: description,
            type: 'ascii'
        },
        category:{
            value: category,
            type: 'categories'
        }
    };


    try {
        validateFields(fieldsToBeValidated);
        await AdsService.updateById(id, title, user_id, description, category);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    const {
        id
    } = req.params;

    
    const fieldsToBeValidated = {
        id: {
            value: id,
            type: 'ascii'
        }
    };

    try {
        validateFields(fieldsToBeValidated);
        await AdsService.deleteById(id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
});

module.exports = router;