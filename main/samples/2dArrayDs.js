function hourglassSum(arr) {

    let traversableArrLength = arr.length -2;
    let hourGlassArr = [];

    for(let x=0; x<traversableArrLength; x++) {
        for(let y=0; y<traversableArrLength; y++) {
            let hourGlassSum =  arr[x][y] + arr[x][y+1] + arr[x][y+2] +
                arr[x+1][y+1] +
                arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2];
            hourGlassArr.push(hourGlassSum);
        }
    }
    return arrayMax(hourGlassArr);
}

function arrayMax(arr) {
    return arr.reduce(function (p, v) {
        return ( p > v ? p : v );
    });
}

module.exports = { hourglassSum, arrayMax };