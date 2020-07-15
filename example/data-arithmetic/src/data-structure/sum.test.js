/*
 * @Author: DaiLinBo
 * @Date: 2020-07-01 13:49:31
 * @LastEditTime: 2020-07-02 14:48:34
 * @LastEditors: DaiLinBo
 * @Description: This is test case of jest.
 */ 
const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
})