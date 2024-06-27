
function analyzeArray(arr) {
    const sorted = arr.sort((a, b) => a - b);

    const obj = {
        min: sorted[0],
        max: sorted[sorted.length - 1],
        average: sorted.reduce((prev, curr) => prev + curr, 0) / sorted.length,
        length: arr.length
    }

    return obj;
}

export {
    analyzeArray
}