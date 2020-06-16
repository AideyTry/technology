<!--
 * @Author: DaiLinBo
 * @Date: 2020-06-16 12:15:59
 * @LastEditTime: 2020-06-17 00:01:34
 * @LastEditors: DaiLinBo
 * @Description This is front-end application scenarios of arithmetic.
--> 
### 前端算法应用
#### DOM-DIFF 算法
#### Fiber
##### 队列和调度算法（React Fiber）
### 图形算法
#### SVG和Canvas绘图的底层算法
### 数据可视化算法

### 冒泡排序
```
function swap(arr, i, j){
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
function bubble_sort(arr){
  for(let i = arr.length; i > 0; i--){
    for(let j = 1; j < i; j++){
      if(arr[j] < arr[j - 1]>){
        swap(arr, j, j-1)
      }
    }
  }
  return arr
}
```