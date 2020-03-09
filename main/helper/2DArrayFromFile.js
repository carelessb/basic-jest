const { readDataFile } = require('./readFromFile');

function read2DArrayFromString(inputString)  {
    let arrayOfStrings = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    let arr = Array(arrayOfStrings.length);

    for (let i = 0; i < arrayOfStrings.length; i++) {
        arr[i] =  arrayOfStrings[i].split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    return arr;
}

async function read2DArrayFromFile(fileName) {
    let arr = null;
    try {
        const data = await readDataFile(fileName);
        arr = read2DArrayFromString(data);
    } catch (error) {
        console.log(error)
    }

    return arr;
}


module.exports = { read2DArrayFromFile };