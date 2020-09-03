/*
 * @Author: DaiLinBo
 * @Date: 2020-08-10 11:14:48
 * @LastEditTime: 2020-08-11 11:18:06
 * @LastEditors: DaiLinBo
 * @Description: 
 */

/**
 * @description: Use a loop to calculate the factorial.
 * @params: 
 * @return {type} 
 */ 
function factorialIterative(number){
  if(number < 0) return undefined
  let total = 1
  for(let n = number; n > 1; n--){
    total = total * n
  }
  return total
}


/** 
 * @description: Use recurision to calculate factorial. 
 * @params: 
 * @return {type} 
 */ 
function factorial(n){
  if(n === 1 || n === 0){
    return 1
  }
  return n * factorial(n - 1)
}

/** 
 * @description: 
 * @params: 
 * @return {type} 
 */ 
function fibonacciIterative(n){
  if(n === 0){
    return 0
  }
  if(n <= 2){
    return 1
  }
  return fibonacciIterative(n - 1) + fibonacciIterative(n - 2)
}


