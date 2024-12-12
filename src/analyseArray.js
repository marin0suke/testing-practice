export function analyseArray(arr) {
    return { 
        length: arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length
    }
}