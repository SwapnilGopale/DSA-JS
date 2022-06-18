/*
Swapnil Gopale
Name: Merge Sort
Worst Case time complexity O(n log n)
Average Case time complexity O(n log n)
Best Case time complexity O(n log n)
Space Compexity O(n)
*/

function mergeAndSortArrays(arr1,arr2){
    let [i,j,result] = [0,0,[]]

    // Sort and merge the array elements till checked onfrom one of the ele
    while(i<arr1.length && j<arr2.length){
        if(arr2[j] > arr1[i] ) result.push(arr1[i]) && i++;
        else  result.push(arr2[j]) && j++;
    }

    // for remaining element check
    while(i<arr1.length)
        result.push(arr1[i]) && i++
    while(j<arr2.length)
        result.push(arr2[j]) && j++

    return result
}

// the main function
function mergeSort(arr){
    if(arr.length<=1) return arr;

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return mergeAndSortArrays(left,right)
}

// Examples
let sortedArray = mergeSort([5,65,32546,5,756,73,325,463,23,5236,57,68,78,4,2,312,557,64,23,43675,2,46,57])
console.log("sortedArray => ",sortedArray)
sortedArray = mergeSort(['cat', 'dog', 'elephant', 'bee', 'ant'])
console.log("sortedArray => ",sortedArray)