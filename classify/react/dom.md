### 如何在react中获取到真实的dom?

#### 1.ref

##### 结构
```
    <input type="text" ref="numA" />+
    <input type="text" ref="numB" />
    <button onClick={this.add}>=</button>
    <input type="text" ref="result" />
```
##### 方法
```
  add = () => {
    // console.log('this.refs=', this.refs.numA)
    let numA: any = this.refs.numA;
    let numB: any = this.refs.numB;
    let res: any = this.refs.result
    let aValue: any = numA.value
    let bValue: any = numB.value
    let result = parseFloat(aValue) + parseFloat(bValue)
    res.value = result
  }
```