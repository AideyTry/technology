/*
 * @Author: DaiLinBo
 * @Date: 2020-06-29 23:26:02
 * @LastEditTime: 2020-07-01 13:14:46
 * @LastEditors: DaiLinBo
 * @Description: This is the test case of Queue.
 */

const { assert } = require("chai");
const Queue = require("./queue");

describe("test stack", () => {
  it("FIFO", () => {
    const q = new Queue(1000);
    for (let i = 1; i <= 5; i++) {
      q.enqueue(i);
    }
    for (let i = 1; i <= 5; i++) {
      assert.equal(q.dequeue(), i);
    }
  });
  it("overflow-1", () => {
    const q = new Queue(1000);
    let error = null;
    try {
      for (let i = 0; i < 100001; i++) {
        q.enqueue(i);
      }
    } catch (ex) {
      error = ex;
    }
    assert.equal(error, "overflow");
  });
  it("overflow-2", () => {
    const q = new Queue(1000);
    let error = null;
    try {
      for (let i = 0; i < 999; i++) {
        q.enqueue(i);
      }
    } catch (ex) {
      error = ex;
    }
    assert.equal(error, null, "overflow");
  });
  it("underflow", () => {
    const q = new Queue();
    let error = null;
    try {
      q.dequeue();
    } catch (ex) {
      error = ex;
    }
    assert.equal(error, "underflow");
  });

  it("property", () => {
    const q = new Queue(9999999);
    const t = new Date().getTime();
    for (let i = 0; i < 9999999; i++) {
      q.enqueue(i);
    }
    assert.equal(new Date().getTime() - t < 300, true, "性能不达标！");
  });
});
