/*
Swapnil Gopale
Name: Addition From One To N

Function will n as input and will return factorial of n.
*/

function factorialOfN(n){
    if(n==1)
        return n
    return n*factorialOfN(n-1);
}

// ES6 way
var factorial = (n)=>n==1?n:n*factorial(n-1)

// Example
console.log(factorialOfN(10))
console.log(factorial(10))