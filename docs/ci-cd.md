<!--
 * @Author: Aiden
 * @Date: 2021-09-01 15:31:16
 * @LastEditTime: 2021-09-23 17:01:33
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
-->
## CI/CD
### Docker手动部署项目
#### 1.拉取项目需要依赖的镜像
```bash
docker image pull node
docker image pull java
```
#### 2.通过Dockerfile制作项目镜像
- Dockerfile
```bash
   # 1.前端Dockerfile
    FROM node # 基于node镜像来去做的
    COPY ./front-website /front-website # 将当前目录下的front-website目录下面的文件拷贝到镜像里的/front-website目录中
    WORKDIR /front-website # 指定工作路劲，类似于执行cd命令
    RUN yarn # 安装
    EXPOSE 3016 # 暴露3016端口，允许外部链接这个端口
    CMD yarn server # 启动容器的时候执行

   # 2.后端Dockerfile
    FROM java # 基于java或者java jdk的镜像来去做的都可以
    COPY ./web-backend /web-backend
    WORKDIR /web-backend
    EXPOSE 8080
    CMD java -jar target/backend-0.0.1-SNAPSHOT.jar # 运行java包

```
- 创建image
```bash
docker build -t front-end . # .代表以某个文件夹作为构建目录，构建名称为front-end的前端镜像
docker build -t web-backend . # .代表以某个文件夹作为构建目录，构建名称为web-backend的后端镜像
```

#### 3.通过docker-compose配置文件来管理多个docker容器
```bash
version: "2.2"
services:
  website-front-end: # 前端服务
    image: front-end
    ports:
      - "8080:3016"
  website-backend: # 后端服务
    image: backend
    environment:
      - DOCUMENT_CONF_WATCH_DIR=/site-docs # 设置环境变量，访问到容器内部的文件夹，相当于访问对应的宿主机的目录
    volumes: # 将宿主机某个文件夹目录映射到容器内部文件夹内
      - "/home/user/front-end/docs:/site-docs"
    ports:
      - "9000:8080"
```

#### 4.运行容器启动服务
```bash
docker-compose up -d
```

#### 常用docker指令
```bash
镜像相关常用指令
    docker image ls 查看全部镜像
    docker image inspect ubuntu 查看ubuntu的详情
    docker image pull centos 拉取centeos镜像
    docker image rmi centos(按名称或者按照image id删除)
容器相关常用指令
    docker container run -d -p 8080:3000 项目镜像名称 /bin/bash(如果配置了CMD则去掉/bin/bash)  # 将3000映射为8080端口并在后台运行容器
    docker container ps # 查看运行中的容器
    docker container ps -a # 查看所有的容器
    docker container ps -l # 查看最新的容器
    docker container run it centos /bin/bash # 进入centos容器内部
    docker container rm $(docker ps -a -q) # 删除全部容器
    docker kill 容器id  # 直接杀死结束运行的容器
    docker stop 容器id  # 直接停止结束运行的容器 
    docker start 容器id  # 启动运行的容器
    docker exec -it 775c7c9ee1e1 /bin/bash # 进入docker的某个容器
```

### Nginx + Jenkins自动化部署
#### Nginx： 静态服务器、反向代理
##### 安装Nginx: http://nginx.org/en/linux_packages.html#RHEL-CentOS
##### 配置vim /etc/nginx/conf.d/*.conf
```    location / { ## 做静态服务
        root /home/ccmproject/ccm-website/front-end/ccm;
	      index  index.html;
    }

    location /prod/ { ## 反向代理
       proxy_pass http://127.0.0.1:8080/;

    }
```