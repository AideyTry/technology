<!--
 * @Author: your name
 * @Date: 2021-01-11 14:54:16
 * @LastEditTime: 2021-01-14 13:27:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \technology\docs\nginx.md
-->
## 1、Nginx应用场景
### 静态资源服务器
### 反向代理服务
### API接口服务

## 2、Nginx优势
### 高并发高性能
### 可扩展性好
### 高可靠性
### 热部署（边运行边部署）
### 开源许可证

## 3、安装Nginx
### yum install nginx -y
### 查看nginx安装的配置文件和目录rpm -ql nginx

## 4、配置文件
### 入口配置文件 /etc/nginx/
### 核心配置文件 /etc/nginx/nginx.conf
```bash
进入  vi nginx.conf
user nginx; #设置运行此nginx用户名
worker_processes 1; #工作进程数（1表示1核的）
error_log /var/log/nginx/error.log warn; #指定错误日志的路劲 日志的格式
pid /run/nginx.pid;#这是一个文件，里面放的是当前nginx的进程号

events {
    worker_connections 1024;#工作进程的最大连接数
}

http {
    include /etc/nginx/mime.types; #包含内容和文件名后缀的对应关系
    default_type application/octet-stream; #默认的Content-Type
    access_log /var/log/nginx/access.log main; #指定访问日志的存放位置，格式为main
    sendfile  on; #零拷贝模式
    tcp_nopush on; #TCP暂时不推，有一定的缓存
    keepalive_timeout 65; #活动链接的超时时间 65s
    gzip on; #是否启用压缩

    include /etc/nginx/conf.d/*.conf; #包含其他配置文件
}

```
#### 可以用#表示注释，用$表示变量
#### 启动nginx
```bash
systemctl start nginx
```

### 监控nginx客户端的状态

### 网络
#### 三次握手
```bash
为什么要三次握手：是为了确认双方的收发都是正常的
为什么握手是三次而挥手是四次：因为握手的时候是没有数据发生的，
```

## Nginx做静态资源Web服务
## Nginx做动态服务
### 写一个node服务
```bash
mkdir app
cd app
vim 3000.js
    
```

## CND
```bash
CDN的全称是Content Delivery Network，即内容分发网络
CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。其目的是使用户可就近取得所需内容，解决Internet网络拥挤的状况，提高用户访问网站的响应速度。
```
## 跨域
```bash
跨域是指一个域下的文档或脚本试图去请求另一个域下面的资源
实现方式在location中添加头部信息，例如：

location ~ ^/api{
    add_header Access-Control-Allow-Origin 当前主机ip地址:3000;
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
}
```
## 防盗链
### 防止网站资源被盗用
### 保证信息安全
### 防止流量过量
### 需要区别哪些请求是非正常的用户请求
### 使用http_refer防盗链

## 代理服务
### 正向代理
```bash
正向代理的对象是客户端，服务器端看不到正在的客户端；
例如：通过公司代理服务器上网
```
### 反向代理
```bash
反向代理的对象是服务端，客户端看不到真正的服务端。
例如：nginx代理应用服务器
location ~ ^/api {
    add_loader Access-Control-Allow-Origin http://192.168.20.1:8080;
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
    proxy_pass http://127.0.0.1:3000;
}
```