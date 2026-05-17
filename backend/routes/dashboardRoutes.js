const express = require('express');

const router = express.Router();

const {
    getProductos
} = require('../controllers/dashboardController');

router.get('/productos', getProductos);

module.exports = router;