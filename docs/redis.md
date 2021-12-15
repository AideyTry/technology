<!--
 * @Author: Aiden(戴林波)
 * @Date: 2021-12-13 06:36:27
 * @LastEditTime: 2021-12-15 16:35:35
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
-->
# Redis
## Redis简介
   Redis是完全开源免费的，是一个高性能的key-value数据库
## Redis优势
   - 性能搞-Redis能读的速度是110000次/s,写的速度是81000次/s；
   - 丰富的数据类型-Redis支持二进制的字符串、列表、哈希值、集合和有序集合等数据类型操作；
   - 原子性-Redis的所有操作都是原子性的，意思就是要么成功执行要么失败完全不执行；
   - 单个操作是原子性的。多个操作也支持事务，即原子性，通过MULTI和EXCL指令包起来；
   - 丰富的特性—Redis还支持发布订阅、通知、key过期等等特性。
## 数据类型
   - 字符串
   - 哈希值
   - 列表
   - 集合
   - 有序列表

## Redis用途
   - 做缓存
   - 权限
   - 发布订阅
## 数据库用途
   - 对于那些可靠性要求高的用MySQL
   - 对于那些存储量大的用Mongodb
   - 对于那些读写性能要求高的用Redis

## Redis在windos下安装
   
   https://www.redis.com.cn/redis-installation.html

## Redis在Linux下
   1. vi /etc/redis.conf设置密码
   2. 启动时候要指定配置文件redis-server /etc/redis.conf