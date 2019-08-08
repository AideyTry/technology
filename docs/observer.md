### 观察者模式

观察者模式是包含发布订阅的

观察者模式是基于发布订阅的

Vue是观察者模式

观察者模式有观察者和被观察者，如果被观察者数据变化了，通知观察者，观察者和被观察者是有关系的

被观察者中要存放观察者，而发布订阅，发布和订阅是没有关系的，通过中间代理联系上关系。

```
// 被观察者  小孩子
class Subject {
  constructor(name) {
    this.name = name;
    this.observers = []; // 观察者要放到被观察者中
    this.state = '心情很好'
  }
  // 被观察者要提供一个接受观察者的方法
  attach (observer) {
    this.observers.push(observer)
  }
  setState (newState) {
    this.state = newState
    this.observers.forEach(o => o.update(newState))
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  update (newState) { // 用来通知所有的观察者状态更新了
    console.log(this.name, newState)
  }
}

let sub = new Subject('宝宝')
let o1 = new Observer('爸爸说')
let o2 = new Observer('妈妈说')
sub.attach(o1)
sub.attach(o2)
sub.setState('哭了')
```