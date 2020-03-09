const {read2DArrayFromFile} = require('../helper/2DArrayFromFile');

const { hourglassSum, arrayMax } = require('./2dArrayDs');

describe('Test the arrayMax function', () => {

    test('Basic case with small numbers', () => {
        expect(arrayMax([5,9,11,1,99])).toBe(99);
        expect(arrayMax([5,5,9,1,99])).not.toBe(5);
    });
    test('Case when all values are equal', () => {
        expect(arrayMax([9,9,9,9,9])).toBe(9);
    });


});


describe('Test the hourglassSum function', () => {

    test('Basic case with small numbers', () => {
        let arr = [];
        arr.push([1, 1, 1, 0, 0, 0]);
        arr.push([1, 1, 1, 0, 0, 0]);
        arr.push([0, 0, 2, 4, 4, 0]);
        arr.push([0, 0, 0, 2, 0, 0]);
        arr.push([0, 0, 1, 2, 4, 0]);

        expect(hourglassSum(arr)).toBe(19);
    });

    test('read an arr from a file', async () => {
        const arrayData = await read2DArrayFromFile('array2x2_1.txt');
        const sum = hourglassSum(arrayData);
        expect(sum).toBe(44);
    });



});





