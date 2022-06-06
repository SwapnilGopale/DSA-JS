/*
Swapnil Gopale
Name: Linear Search
Worst Case time complexity O(n)
Best Case time complexity O(1)
No need of sorted array

Function will take an array as a first parameter and value to be search as second parameter.
Return index where it first occured in array
*/

function linearSearch(arr,ele){
    for(let i=0;i<arr.length;i++)
        if(arr[i] === ele) return i;
    return -1
}

// Example
let arr = [1,2,4,3,5,2,31,41,2,344,5]
console.log(linearSearch(arr,5))
arr = ['z','a','b','c']
console.log(binarySearch(arr,'c'))