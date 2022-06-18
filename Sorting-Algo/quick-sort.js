/*
Swapnil Gopale
Name: Quick Sort
Worst Case time complexity O(n^2)
Average Case time complexity O(n log n)
Best Case time complexity O(n log n)
Space Compexity(log n)
*/

// We have to get the pivot

function getPivot(arr,start=0,end=arr.length){
    let [pivot,swapId] = [arr[start],start]

    for(let i = start+1; i <= end; i++){
        if(pivot>arr[i]){
            swapId++
            [arr[i],arr[swapId]] = [arr[swapId],arr[i]]
        }
    }
    [arr[start],arr[swapId]] = [arr[swapId],arr[start]]
    return swapId;
}

// Quick Sort Main function.

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivot = getPivot(arr,left,right);
        quickSort(arr,left,pivot-1)
        quickSort(arr,pivot+1,right)
    }
    return arr
}

// Examples
let sortedArray = quickSort([5,65,32546,5,756,73,325,463,23,5236,57,68,78,4,2,312,557,64,23,43675,2,46,57])
console.log("sortedArray => ",sortedArray)
sortedArray = quickSort(['cat', 'dog', 'elephant', 'bee', 'ant'])
console.log("sortedArray => ",sortedArray)