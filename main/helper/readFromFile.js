const fs = require('fs').promises;
const path = require("path");

async function readDataFile(fileName) {
    let data = '';
    const filePath = './../data/' + fileName;
    try {
        data = await fs.readFile(path.resolve(__dirname, filePath), 'utf8');
    } catch (error) {
        console.error(error)
    }

    return data;
}


module.exports = { readDataFile };