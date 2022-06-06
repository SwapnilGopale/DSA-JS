/*
Swapnil Gopale
Name: Addition From One To N
Worst Case time complexity O(1)
Best Case time complexity O(1)

Function will n as input and will return sum fo elements from 1 to n.
*/

function addTillN(n) {
    return n*(n+1)/2
}

// ES6 way
var addition = (n)=>n*(n+1)/2;
// Example 
console.log(addTillN(5))
console.log(addition(10))