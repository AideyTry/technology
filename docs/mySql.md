<!--
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-22 15:02:33
 * @LastEditTime: 2021-10-25 14:38:44
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
-->
# mySql关系数据库
## 数据库概念
### 作用：
- 存储大量数据，方便检索和访问。
- 保持数据信息的一致、完整。
- 共享和安全。
- 通过组合分析，产生新的有用信息。
### 基本概念
- 实体
可以被描述出来的都是实体。例如：人，桌子等。
- 数据库(DB)
数据库就是数据的仓库，可以存放结构化的数据。
- 数据库管理系统（DBMS）
一种软件，提供操作数据库的环境，可以通过数据库管理系统对数据进行插入、修改、删除和查询等操作。
- SQL
结构化查询语言，专门用来和数据库进行交流的语言，几乎所有的DBMS都支持SQL。
```
列（字段）
行（记录，一个实体）
```
SQL规范
1. SQL语句不区分大小写，建议SQL关键字大写，表名和列表小写
2. 命令用分号结尾。
3. 命令可以缩进和换行，一种类型的关键字放一行。
4. 可以写单行和多行注释，#和--是单行注释， /**/多行注释

### 数据表
- 表是数据库中包含所有数据的数据库对象，也是其他对象的基础。
- 表定义是一个列的集合，数据在表中是按行和列的格式组织的，用来存放数据。
- 行也称为记录用来存放一个个实体，列成为字段用来描述实体的某一属性

### MYSQL
#### MYSQL特点
- 开源免费
- 性能高
- 安装使用都简单

### MySQL安装
直接下一步安装
- 只要选择Developer Default模式安装，此模式会安装开发人员需要的常用组件，在安装这些组件时需要对应的环境依赖

### 配置
- 安装时候默认配置的端口是3306，可进行修改
- 安装时候会有账号密码设置，默认账号为root
- 可以点击add user添加新用户
- 设置服务名称，默认MySQL80(Windows Service Name,MySQL数据库在Windows系统中运行的服务名)
### MySQL卸载
1. 关闭/启动服务
    管理员启动cmd命令行
    ```
    net stop MySQL80
    net start MySQL80
    ```

2. 卸载软件

    首先卸载MySQL Server 8.0，再把其他MySQL相关的全部卸载
    ![卸载软件](/images/MySQL/uninstall.png)

3. 删除目录

    - MySQL的安装目录
      ```
      C:\Program Files\MySQL
      ```
    - MySQL的数据文件目录（默认隐藏）
      ```
      C:\ProgramData\MySQL
      ```
    - 删除注册表中
     ```
    HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\MySQL80
     ```
### 使用DBMS工具操作 
- SQLyog
- Navicat for MySQL
安装MySQL会默认安装了MySQL Command line Client命令行工具

#### MySQL Command line Client使用
- 开始菜单打开：MysQL-MySQL8.0 Command line Client
- 连接MySQL,输入密码即可

![connet](/images/MySQL/connet.png);
- 关闭MySQL Command line Client：输入exit指令即可退出
- 常用指令
```shell
show databases; #显示有哪些数据库
use world; #切换到world数据库
show tables; # 显示里面有哪些表
select database(); # 查询当前所在的数据库
desc [表名称]; #查看表的结构
```

#### 可视化工具Navicat使用
- 官网下载默认安装
- 打开软件直接左上角连接
![连接视图](/images/MySQL/connect2.png)
![连接](/images/MySQL/Navicat-connect.png)
- 新建数据库
 1. 字符集选择utf8mb4;排序规则选择utf8mb4_bin

 ### 以Navicat为工具创建表
 - 主键：不能重复的字段，唯一的。
