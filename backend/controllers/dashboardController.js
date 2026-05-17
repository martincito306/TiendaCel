const { leerHoja } = require('../services/sheetsService');

const getProductos = async (req, res) => {

    try {

        const productos = await leerHoja('productos');

        res.json(productos);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getProductos
};