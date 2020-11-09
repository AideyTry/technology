/*
 * @Author: Aiden
 * @Date: 2020-10-26 19:25:34
 * @LastEditTime: 2020-10-28 10:29:55
 * @LastEditors: Aiden
 * @Description: 
 */
function echo<T>(arg: T): T{
  return arg
}
const str:string = 'zs'
const result = echo(str)

interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg:T):T{
  console.log(arg.length)
  return arg
}

const str1 = echoWithLength('str')
const obj = echoWithLength({length: 10})
const arr = echoWithLength([1,2,3])


function getLength(input: string | number) : number {
  if((<string>input).length){
      return (<string>input).length
  } else {
      return input.toString().length
  }
}