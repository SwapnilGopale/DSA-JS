/*
Swapnil Gopale

Name: radix sort (This only works for the positive numeric values)

Worst Case time complexity O(nd), where n is the size of the array and d is the number of digits in the largest number

Average Case time complexity O(nd), where n is the size of the array and d is the number of digits in the largest number

Best Case time complexity O(nd), where n is the size of the array and d is the number of digits in the largest number

Space Compexity O(n+k)
*/

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
   
function radixSort(nums){
    let maxDigitCount = String(Math.max(...nums)).length; //get number with maximum digits

    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []); // Create Empty buckets to fill out

        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]); //push number to relative bucket
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
  
console.log(radixSort([23,345,0000,12,2345,9852]))
  