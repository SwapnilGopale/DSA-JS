/*
Swapnil Gopale
Name: Get nth number from fibonacci series 

Function will n as input and will return nth number from fibonacci series.
*/

// Simple Recursion

const fib = (n)=>{
  if(n<2) return 1
  return fib(n-1)+fib(n-2)
}
// Example
console.log(fib(5))
console.log(fib(7))
console.log(fib(9))

// In above solution when we call with bigger number it will take more time eg.
console.log(fib(50))

// Better solution for the fib with memoization to solve above problem

const fibWithMemo = (n,memo={})=>{
	if(n in memo) return memo[n]
  
  if(n<2) return 1
  memo[n] =  fibWithMemo(n-1,memo)+fibWithMemo(n-2,memo)
  
  return memo[n]
  
}

// Example
console.log(fibWithMemo(5))
console.log(fibWithMemo(7))
console.log(fibWithMemo(9))

// This will be much faster than fib function
console.log(fibWithMemo(50))
