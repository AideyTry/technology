<!--
 * @Author: DaiLinBo
 * @Date: 2019-10-16 23:25:17
 * @LastEditTime: 2019-10-17 21:46:32
 * @LastEditors: DaiLinBo
 * @Description: 
 -->

### 一、移动web开发与适配
跑在手机端的web页面（h5页面）
跨平台
基于webview
基于webkit
更高的适配和性能要求
### 二、常见的开发与适配
1、PC
960px / 1000px 居中
盒子模型、定高、定宽
Display: inline-block
2、移动web
定高、宽度百分比
Flex
Media Query (媒体查询)
```
@media 媒体类型 and (媒体特性){
 /css 样式/
}
```
媒体类型： screen, print    媒体特性：max-width, max-height
```
@media scree and (max-width: 320px){
    .inner{
        Width:25%;
        Height: 100px;
        Float: left;
    }
}
@media scree and (min-width: 321px){
    .inner{
        Width: 100px;
        Height: 100px;
    }
}
```
### 二、Rem
字体单位
根据html根元素的大小而定，同样可以作为宽度、高度等单位。
适配原理：px转换为rem,动态的修改html的font-size适配。
默认1rem = 16px
node-sass 将.scss文件转换成.css文件

