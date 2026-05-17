const axios = require('axios');

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

async function leerHoja(nombreHoja) {

    const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${nombreHoja}?key=${API_KEY}`;

    const response = await axios.get(url);

    return response.data.values || [];
}

module.exports = {
    leerHoja
};