<!--
 * @Author: Aiden(戴林波)
 * @Date: 2022-03-16 22:39:21
 * @LastEditTime: 2022-03-16 22:58:41
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
-->
# 微信分享
### app唤起微信直接分享
- 现有wap站点，可以通过wap2app或5+app实现，借用plusShare.js
 参考：https://ask.dcloud.net.cn/docs/
### 微信内部分享
- 使用微信jssdk
  参考：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
  
  注意：
  - 通常传递url时候容易写错，导入签名问题；
  - 微信内部直接用地址栏打开无法进行分享，因为微信只识别类似卡片形式打开进行分享，可收藏url地址后打开进行分享。