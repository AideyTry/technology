<!--
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-22 15:02:33
 * @LastEditTime: 2021-11-02 15:17:04
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

 ### DDL(Data Definition Language)数据定义语言（定义数据库和表的数据结构）
 #### 创建表格以及增删改查
 ```DDL
-- 1.创建表结构关键字一般大写
CREATE TABLE student
(
id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(64) NOT NULL,
age INT(11) DEFAULT NULL,
city VARCHAR(64) DEFAULT '深圳'
)

SELECT * FROM student; # *代表所有的行所有的列。from代表哪个表，查询sudent表.
DESC student; # 查看表结构

-- 2.如何修改和增加表里的字段
ALTER TABLE student ADD COLUMN idcard VARCHAR(64) NULL;  #ALTER为修改。修改表student，增加列idcard字段

-- 3.修改列
ALTER TABLE student MODIFY idcard VARCHAR(5) NOT NULL; # 修改列,idcard字段

-- 4.删除列
ALTER TABLE student DROP idcard;

 ```

 #### 如何增加约束
 ```DDL
-- 1.为表增加主键
ALTER TABLE student ADD PRIMARY KEY(id);
-- 2.增加唯一约束
ALTER TABLE student ADD UNIQUE INDEX uq_student_idcard(idcard);
-- 3.增加默认约束(默认值)
ALTER TABLE student MODIFY COLUMN city VARCHAR(64) DEFAULT '上海';
-- 4.主外健
ALTER TABLE score ADD CONSTRAINT fk_score_student_id FOREIGN KEY(student_id) REFERENCES student(id);
 ```

 ### DML(Data Manipulation Language)数据操纵语言（用于数据库操作）

 ## SQL
 简介：Structured Query Language结构化查询语言
 ### 为什么要用SQL
 1. 使用界面操作数据库不方便。
 2. 我们需要通过应用程序去操作数据库。
 ### SQL组成
 - DDL(data definition language)数据定义语言。
    主要的命令有CREATE、ALTER、DROP等，DDL主要是用在定义或改变表的结构，数据类型，表之间的链接和约束等初始化工作上面，他们大多在建立表时使用。
 - DML（data manipulation language）数据操纵语言
    它们是SELECT、UPDATE、INSERT、DELETE，就像它的名字一样，这4条命令是用来对数据库里的数据进行操作的语言。
 - DCL(data control language)数据库控制语言（开发者一般用的少）
 是用来设置或更改数据库用户或角色权限的语句。

 ### 运算符
 - 算术运算符

 ```dml
 + - * / %
 ```

 - 逻辑运算符
 ```dml
 AND # 并且
 OR  # 或
 NOT # 取反
 ```

 ### 数据操纵语言基础
 #### 插入数据行
 - 语法
 ```dml
INSERT [INTO] 表名 [(列名)] VALUES (值列表)
 ```
- 案例，向学生表插入一条记录，姓名张三，身份证430723，年龄30，城市深圳

```dml
	INSERT INTO student(name, idcard, age, city)
	VALUES ('zs', '430723', 30, '深圳');
```
- 注意事项
  1. 每次插入一行数据，不能只插入一部分数据，插入的数据是否有效将按照整行的完整性要求来检验。
  2. 每个数据值的数据类型、精度、位数必须与要对应的列名精确匹配。
  3. 不能为标识符整定值。
  4. 如果某字段设置不能为空，则必须插入数据。
  5. 插入数据时还要符合检查约束的要求。
  6. 有缺省值的列，可以使用DEFAULT关键字来代替插入实际的值。
#### 更新数据行
- 语法
```dml
UPDATE 表名 SET 列名 = 更新值 [WHERE 更新条件] 
```

- 案例
```dml
	UPDATE student SET name='wx',city='北京' WHERE id=3;
```

- 注意
1. 可以一次更新多列，可以用逗号隔开；
2. 可以指定更新条件，如果有多个条件可以用AND OR NOT

#### 删除
- 语法案例
```dml
	DELETE FROM student WHERE id = 5; #删除id为5的列
  DELETE FROM student; #删除整张表清空数据，如果下次新增数据时，原理的id号不能用了，会写入记录，可以恢复数据。
  TRUNCATE table student; # 截断表，删除整张表情况数据，如果下次新增数据时，完全从新出发，原来的id号可用，不写入记录，不可以恢复数据。

```
- 注意
  1. 删除是整行删除，不需要提供列名。
  2. 如果要删除的表是主表，那需要先删除子表。

#### 查询
简介：查询就是从客户端发出查询请求数据库服务器，并从数据库返回查询结果的过程。
- 语法
```DML
SELECT <列名>
FROM <表名>
[WHERE <查询条件表达式>]
[ORDER BY <排序的列名>[ASC或DESC]]
```
- 查询北京的学生信息，并按ID正序排列
```dml
SELECT id,name
FROM student
WHERE city="北京"
ORDER BY id ASC;
```
- 别名，将city改为home
```dml
SELECT id,name,city as home
FROM student
WHERE city="北京"
ORDER BY id ASC;
```
- 查询idcard为空的行
```dml
SELECT *
FROM student
WHERE idcard IS NULL
```
- 分页操作（查询几条数据）
```dml
SELECT id,name,city
FROM student
limit 1,3 # 以索引为1开始取三条数据。
```

- 查询学生都是来自哪些不同的城市
```dml
SELECT DISTINCT city
FROM student;
```

- SQL中+号只能用来加数字
```dml
SELECT 1 + 1
```

- 函数可用来加字符串
```dml
SELECT CONCAT('a', 'b'); # ab
```

- 模糊匹配
```dml
SELECT * from student
WHERE city LIKE '%京'; # 以京结尾的，'上%'是以上开头的。'%蒙%'表示中间包含蒙
```

- 函数
  1. 字符函数

  函数名称 | 说明
  ------- | ------
  CONCAT | 字符串链接
  CONCAT_WS | 使用指定的分隔符进行字符连接
  FORMAT | 数字格式化
  LOWER  | 转小写字母
  UPPER  | 转大写字母
  LEFT   | 返回字符串s开始的最左边n个字符
  RIGHT | 返回字符串s开始的最右边n个字符

  2. 数学函数

  函数名称 | 说明
  ------- | ------
  CELL | 向上取整
  FLOOR | 向下取整数
  DIV | 整数取
  MOD  | 取余（取模）
  POWER  | 幂运算
  ROUND   | 四舍五入
  TRUNCATE | 数字截取

  3. 日期函数

  函数名称 | 说明
  ------- | ------
  NOW | 当前日期和时间
  CURDATE | 当前日期
  CURTIME | 当前时间
  DATA_ADD  | 日期变化
  DATEDIFF  | 计算日期差
  DATE_FORMAT   | 日期格式化
  