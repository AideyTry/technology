/*
 * @Author: DaiLinBo
 * @Date: 2020-06-29 23:26:02
 * @LastEditTime: 2020-07-27 15:32:56
 * @LastEditors: DaiLinBo
 * @Description: This is the test case of Stack.
 */

const { assert } = require("chai");
const Stack = require('./stack-object')

describe('test stack', () => {
  it('LIFO', () => {
    const s = new Stack(1000)
    for(let i = 0; i < 5; i++){
      s.push(i)
    }
    assert.equal(s.pop(), 4)
    assert.equal(s.pop(), 3)
    assert.equal(s.pop(), 2)
    assert.equal(s.pop(), 1)
    assert.equal(s.pop(), 0)

  })
  it('stackoverflow-1', () => {
    const s = new Stack(1000)
    let error = null
    try{
      for(let i = 0; i < 100001; i++){
        s.push(i)
      }
    } catch(ex){
      error = ex
    }
    // console.log('error==', error)
    assert.equal(error, 'stackoverflow')
  })
  it('stackoverflow-2', () => {
    const s = new Stack(1000)
    let error = null
    try{
      for(let i = 0; i < 999; i++){
        s.push(i)
      }
    } catch(ex){
      error = ex
    }
    // console.log('error==', error)
    assert.equal(error, null, 'stackoverflow')
  })
  it('stackunderflow', () => {
    const s = new Stack()
    let error = null
    try{
      s.pop()
    }catch(ex){
      error = ex
    }
    assert.equal(error, 'stackunderflow')
  })

  it('property', () => {
    const s = new Stack(9999999)
    const t = new Date().getTime()
    for(let i = 0; i< 9999999; i++){
      s.push(i)
    }
    assert.equal(new Date().getTime() - t < 100, true, '性能不达标！')
  })
})