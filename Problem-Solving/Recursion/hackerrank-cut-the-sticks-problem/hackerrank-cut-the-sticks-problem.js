/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr,lengths = []) {
    if(arr.length < 1) return lengths
    let min = Math.min(...arr)
    lengths.push(arr.length )
    let newArray = arr.filter(e=>e!==min)
    return cutTheSticks(newArray,lengths)
}

console.log(cutTheSticks([5,4,4,2,2,8]))