/*
Swapnil Gopale
Name: Binary Search
Worst Case time complexity O(log(n))
Best Case time complexity O(1)
No need of sorted array

Function will take an sorted array as a first parameter and value to be search as second parameter.
Return index where it first occured in array
*/

function binarySearch(arr,ele){
    let [start,end] = [0,arr.length-1]
    let middle = Math.round((start+end)/2)

    while(arr[middle] !== ele && start <= end){
        if(ele < arr[middle]) end = middle-1
        else start = middle+1

        middle = Math.round((start+end)/2)
    }

    return arr[middle] === ele ? middle : -1;
}

// Example
let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(arr,50))
arr = ['a','b','c']
console.log(binarySearch(arr,'c'))