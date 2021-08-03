## CCM Adapt 介绍

CCM Adapt 是 CCM 开放社区重要的组成部分，服务企业 IT 建设的全过程。它是由规约、技术选型、组件和平台服务以及最佳实践组成的完整技术生态。

CCM Adapt 的技术栈覆盖了开发、测试、运维全流程，支持微服务、SOA、MA 等多种架构，支持服务端开发、移动端开发等多种场景，支持持续集成、持续部署、自动化测试、云环境。

### 平台功能（组件和服务）

#### 注册配置中心

**注册配置中心（CCMAdaptRegistry）** 是一个运行时应用程序，基于`Spring Cloud Netflix`，`Eureka` 和 `Spring Cloud Config`。

项目仓库：[https://ccm-adapt.coding.net/p/rome/d/ccm-adapt-registry/git](https://ccm-adapt.coding.net/p/rome/d/ccm-adapt-registry/git)

`CCMAdaptRegistry` 有三个主要目的：

- 它是一个 [Eureka server](https://cloud.spring.io/spring-cloud-netflix/spring-cloud-netflix.html)，为应用提供服务发现和服务注册的功能。该服务器维护并分发可用应用程序实例的动态列表，然后微服务使用这些实例进行 `HTTP` 请求路由和负载均衡。
- 它也是一个 [ Spring Cloud Config server](https://cloud.spring.io/spring-cloud-config/spring-cloud-config.html)，为所有应用运行时配置。
- 它同时也是一个管理服务，提供一个仪表板监视和管理应用程序。

所有这些特性都被打包成一个方便的应用程序，具有现代的基于 `Vue` 的用户界面。

##### 服务注册与发现

`CCMAdaptRegistry` 是一个 `Netflix Eureka server`，为应用提供服务发现和服务注册的功能。这对微服务架构非常有用，网关通过这种方式知道哪些微服务可用，哪些实例已经启动。

##### 统一配置管理

**使用 `Spring Cloud Config` 进行应用程序配置**

`CCMAdaptRegistry` 是一个 `Spring Config Server`，当应用程序启动时，它们将首先连接到 `CCMAdaptRegistry` 以获取配置，网关和微服务都是如此。

这些配置是 `Spring Boot configuration`，类似于 `Spring Boot` 应用程序中 `applicaion-*.yml` 文件的配置，但它存储在中央服务器，因此更容易管理。

启动时，网关和微服务应用程序将查询 `CCMAdaptRegistry` 配置的属性，并用这些定义的属性覆盖其本地属性。

**使用加密的配置值**

`CCMAdaptRegistry` 具有特定的加解密页面，可轻松对配置值进行加密和解密。

要加密配置值（例如，数据库密码），需要：

- 下载 [JCE](https://www.oracle.com/java/technologies/javase-jce-all-downloads.html) 并按照下载文件中的说明进行安装（仅在使用 Oracle JDK[^2] 时才需要）。
- 在 `bootstrap.yml`（而不是 `application.yml`）中设置 `encrypt.key`属性，或在对称密钥密码中使用 `ENCRYPT_KEY` 环境变量。

    ```yaml
    encrypt:
      keyStore:
        location: classpath:/config/encrypt/server.jks
        password: Tc3NDBmZDg3O
        alias: CCMAdaptConfigTestKey
        secret: Tc3NDBmZDg3O
    ```

 [^2]: 只有在 `8u161`、`7u171` 和 `6u181` 之前的 JDK 8、7 和 6 更新才需要 `unlimited policy files`。在这些版本和以后的版本中，`stronger cryptographic` 默认是可用的。


密文必须以 `password = '{cipher}myciphertextafterencryotion'` 的形式放置在任何 `*.yml` 配置文件中，并且在配置服务器将其发送到客户端之前，它将被解密。这样，配置文件（存储在 `Git` 或本地文件系统中）就没有纯明文值。

有关更多信息，请参阅 [Spring Cloud Config](https://cloud.spring.io/spring-cloud-config/spring-cloud-config.html#_encryption_and_decryption) 的加密和解密文档。

##### 管理仪表板

`CCMAdaptRegistry` 提供了用于所有应用程序类型的管理仪表板。一旦应用程序在Eureka服务器上注册，它就会在仪表板中可见。

为了从应用程序访问敏感信息，`CCMAdaptRegistry` 将使用 `JWT` 令牌[^3]。用于签名 `JWT` 的密钥对于应用程序和 `CCMAdaptRegistry` 应该是相同的：默认情况下，`CCMAdaptRegistry` 通过 `Spring Cloud Config` 配置应用程序，这应该是开箱即用的，因为它将发送相同的密钥给所有应用程序。

[^3]: 这儿指的是传统的 `JWT` 令牌，对于 `OAuth2.0 + OIDC`，密钥一般通过认证服务器分发，不需要手动配置

**资源监控**

指标仪表板使用 `Micrometer` 来提供应用程序性能的详细视图。

它提供以下指标：

- `JVM` 状态
- `HTTP` 请求
- cache 使用率
- database 连接池

`JVM` 状态包含正在运行的应用程序的堆栈跟踪，这对于找出阻塞的线程非常有用。

**服务状态**

服务状态仪表板使用 `Spring Boot Actuator` 的 `/health` 端点来提供有关应用程序各个部分的运行状况信息。`Spring Boot Actuator` 提供了许多开箱即用的健康检查，并且添加特定于应用程序的健康检查也非常容易。

**配置检视**

配置检视仪表板使用 `Spring Boot Actuator`的 `/config` 端点来提供当前应用程序的`Spring Boot` 配置的完整视图。

**日志级别调整**

日志仪表板允许在运行时管理正在运行的应用程序的 `Logback` 配置。更改 `Java` 软件包的日志级别就像单击按钮一样简单，这在开发和生产中都非常有用。

**API文档**

`API` 文档集成了 `Swagger-UI`，并使用当前系统的登录认证替换 `Swagger-UI` 默认的登录认证，允许查看所有注册应用的 `HTTP API`，并可以直接发起 `HTTP` 请求。

#### 网关

**网关（CCMAdaptGateway）**为所有微服务提供 `HTTP` 路由、负载均衡、服务质量、安全性和 `API` 文档。

**路由**

启动网关和微服务后，它们将在 `CCMAdaptRegistry` 中注册自己（使用 `src/main/resources/config/application.yml` 文件中的 `eureka.client.serviceUrl.defaultZone` 项）。

网关将使用其应用程序名字自动将所有请求代理到微服务：例如，注册微服务 `app1` 时，该请求在网关上的 `/app1` URL 上可用。

例如，如果网关运行在 `localhost:8080` 上，则可以指向 http://localhost:8080/app1/rest/foos 来获取微服务 `app1` 服务的 foos 资源。 如果尝试使用 Web 浏览器执行此操作，请不要忘记 REST 资源是默认被保护的，因此需要发送正确的 `JWT` HTTP Header 头（请参见安全性要点），或在微服务的 `*SecurityConfiguration` 类删除这些 URL 安全保护。

如果有多个运行同一服务的实例，则网关将从 `CCMAdaptRegistry` 获取这些实例，并将：

- 使用 [Netflix Ribbon](https://github.com/Netflix/ribbon) 负载均衡HTTP请求。
- 使用 [Netflix Hystrix](https://github.com/Netflix/hystrix) 提供断路器，以便快速，安全地删除发生故障的实例。

每个网关都有一个特定的菜单，可以在其中监视打开的 HTTP 路由和微服务实例。

**安全**

请参考“安全特性”章节

**限流**

这是一项高级特性，它使用 Redis 和 Lua 提供微服务上的服务质量。

网关提供速率限制功能，因此可以限制 REST 请求的数量：

- IP 地址（对于匿名用户）
- 通过用户登录（对于已登录的用户）
- 通过 URL（指定 URI 或 URI 匹配规则）
- HTTP 请求方法

然后，`CCMAdaptGateway` 将使用 Redis 请求计数，并在超出限制时发送HTTP 429（请求过多）错误。

这是一项重要功能，可以保护微服务架构免于被特定用户的请求所淹没。

网关在保护 REST 端点安全时，可以完全访问用户的安全信息，因此可以轻松地扩展它，以根据用户的安全角色提供特定的速率限制。

**灰度**

略

**HTTPS**

请参考：[https://docs.spring.io/spring-cloud-gateway/docs/2.2.6.RELEASE/reference/html/#tls-and-ssl](https://docs.spring.io/spring-cloud-gateway/docs/2.2.6.RELEASE/reference/html/#tls-and-ssl)

**访问控制策略**

默认情况下，所有已注册的微服务都可以通过网关来访问。如果要排除通过网关公开访问的特定 API，可以使用网关的特定访问控制策略过滤器。

#### 账户系统

账户系统是由字典管理、用户管理、角色管理、权限管理、组织管理、资源管理 6大模块组成。其中字典模块服务于其它五大模块。

##### 字典管理

字典管理是账户系统里管理和维护账户系统全部字典数据的模块。使用者可以通过此模块提供的API接口完成字典的管理、维护和使用。

默认情况下，CCM Adapt 预留设置有一些系统预留字典类别和字典项，用于初始化账户系统。系统预留的字典类别和字典项在API使用时将被限制操作。

字典管理模块使用CCM Adapt的字典相关数据库表进行字典数据的维护和管理。

##### 用户管理

用户管理是账户系统里对于用户的管理模块，在使用用户模块时用户会直接关联到组织、角色上面。使用者可以通过此模块提供的API接口完成用户的管理、维护和使用。注意, 系统预留的用户在API使用时将被限制操作。

默认情况下，CCM Adapt 预留设置有 4 个用户：

- “system”, 当自动完成某项操作时，主要由审计日志使用
- “anonymousUser”, 匿名用户在执行操作时分配
- “user”, 具有”ROLE_USER”授权的普通用户。它的默认密码是”user”
- “admin”, 具有”ROLE_USER”和”ROLE_ADMIN”授权的管理员用户。它的默认密码是”admin”

所有的用户都可以结合CCM Adapt 提供的安全机制进行使用：

- 在使用JSON Web令牌（JWT）情况下，用户管理模块使用CCM Adapt的用户数据库进行登录验证
- 在使用OAuth2情况下，用户管理模块可以结合Keycloak的第三方SSO登录，并且可以对Keycloak的账户数据进行维护和管理。

账户系统提供根据组织、角色、权限、资源查询用户的API接口。

##### 角色管理

角色管理是账户系统里定义和区分用户角色身份的模块。在使用角色模块时角色会直接关联到权限、人员上面。使用者可以通过此模块提供的API接口完成对角色的管理、维护和使用。

默认情况下，CCM Adapt 预留设置有一些系统预留系统角色，系统预留的角色在API使用时将被限制操作。

系统内建的用户可能包含如下角色：

- ROLE_ADMIN: 管理员，可访问内嵌监控平台，账户系统种所有涉及到数据更新和删除操作的API以及查询全部模块数据的API通常都需要此角色才能操作
- ROLE_USER: 普通业务用户，账户系统中登录、查询用户自身数据的API通常需要具有此角色才能操作。

> 注意，ROLE_ADMIN 角色与ROLE_USER之间是相互独立的，并不存在包含关系。

根据用户使用JWT或Oauth2.0的不同，使用时的区别：

- 在使用JSON Web令牌（JWT）情况下，角色管理模块使用CCM Adapt的角色相关数据库表进行角色验证
- 在使用OAuth2情况下，角色管理模块可以结合Keycloak使用。这种情况下，所有的角色API操作不仅使用CCM Adapt角色相关数据库表并且可以对Keycloak的角色数据进行维护和管理。
- 账户系统提供根据人员、权限查询角色的API接口

##### 权限管理

权限管理是账户系统里定可操作对象权限的模块。在使用权限时权限会直接关联到角色、组织、资源上面。一个角色和组织所拥有的权限取决于账户系统内部最终对于该角色、组织经过一系列的权限授予和解除授予操作后的最终结果。注：资源与权限的关系将在资源管理下面单独说明。使用者可以通过此模块提供的API接口完成对权限的管理、维护和使用。

- CCM Adapt并不预留设置默认权限，一切权限根据使用者的业务需要设定即可。可以通过账户系统对应的前端UI进行操作设置。
- 权限与其它权限之间存在上下级关系。
- 当创建权限时，如果创建的权限存在有效的上一级权限，则被创建的权限将被默认授予到拥有上一级权限的角色或组织，如果想解除这种授予关系，可以通过解除授予角色、组织权限的操作进行解除。
- 当删除权限时，将默认删除该权限及所有下级权限，并解除这些权限对角色和组织的授予关系。
- 当授予角色、组织权限时，如果权限下面存在下级权限，所有下级权限都将默认授予到用于授予权限操作的角色、组织上面，解除授予权限操作则执行相反操作。
- 模块提供API接口可以从任何一个层级的权限向上、向下访问所有关联的权限
- 账户系统提供根据角色、组织、资源、人员查询权限的API接口

##### 组织管理

组织管理是账户系统里管理组织层级关系的模块。在使用组织模块时会直接关联到权限、人员上面。一个权限、人员所关联的组织取决于账户系统内部最终对于该权限、人员经过一系列的组织权限授予/解除授予操作、组织人员关系建立/解除建立操作后的最终结果。使用者可以通过此模块提供的API接口完成对组织的管理、维护和使用。

- CCM Adapt并不预留设置默认组织，一切组织关系根据使用者的业务需要设定即可。可以通过账户系统对应的前端UI进行操作设置。
- 组织节点之间存在上下级关系，这也是建立组织结构图的纽带。
- 当创建组织节点时，如果创建的组织节点存在有效的上一级组织节点，则被创建的组织节点将被默认与拥有上一级组织节点的人员、权限建立独立的关联关系，如果想解除这种关联关系，可以通过组织人员维护和解除组织权限操作进行解除。
- 当删除组织节点时，将默认删除该组织节点及所有下级组织节点，并解除这些组织节点与人员、权限的关联关系。
- 当授予组织权限时，如果组织节点下面存在下级组织节点，所有下级组织节点都将默认被授予操作的权限，解除授予组织权限操作则执行相反操作。
- 模块提供API接口可以从任何一个层级的组织节点向上、向下访问所有关联的组织节点
- 模块提供API接口可以从任何一个组织节点开始或全部组织节点数据构建组织结构树和组织结构图
- 账户系统提供根据人员、权限查询组织的API接口

##### 资源管理

资源管理是账户系统里管理账户系统一切可操作对象即资源的模块。在使用资源模块时会直接关联到权限上面。一个资源所关联的权限取决于账户系统内部最终对于该资源经过一系列的权限资源分配/解除分配操作后的最终结果。使用者可以通过此模块提供的API接口完成对资源的管理、维护和使用。

- CCM Adapt并不预留设置默认资源，但是建议默认将系统菜单设置为资源，根据使用者的业务需要设定即可。可以通过账户系统对应的前端UI进行资源操作设置。
- 资源与资源之间不存在上下级关系，这点要注意。
- 授予权限资源时，如果权限下有子权限，自动将资源同时授予子权限
- 解除授予权限资源时，如果权限下有子权限，自动解除该资源授予子权限
- 账户系统提供根据人员、角色、权限查询资源的API接口

#### 流程引擎

##### 特点优势

* CCM Adapt Workflow的愿景是打造一款解决各种常规审批流程、疑难流程，动态流程的BPM产品。

  利用多年积累的技术与客户口碑优势进行全方位升级。

* 基于 Activiti生来具有的稳定的工作流引擎。
* 缩短项目周期、优化人员配置、降低软件费用是CCM Adapt Workflow最突出的优势。
* CCM Adapt Workflow可以从人员成本、时间成本、沟通成本、机会成本四个维度帮助企业优化成本结构。
* CCM Adapt Workflow完全遵循BPM2.0标准，可以无缝将Activiti/Camunda/Flowable/Zeebe等模型迁移到CCM Adapt Workflow系统中。
* CCM Adapt Workflow完全兼容Springboot1.x以及springboot2.x技术体系。

##### 特色功能

* 强大的建模器，支持自定义图标、图形化方式模型校验，看起来更加的清晰直观
* 业务化的属性设置，因此在使用CCM Adapt Workflow的时候，无需过多的BPM专业知识，即可达到人人都可以设计成一个业务流程

- 支持流程设计器，流程导入导出，符合 BPMN 规范，中国式工作流
- 支持流程办理、退回、会签、并行、串行、服务任务等
- 支持退回任务，退回到指定环节，退回到上一步，退回到发起人
- 支持委托任务，将任务委托给他人，他人办理完成后再回到委托人
- 支持终止流程，允许管理员维护终止流程
- 支持流程跟踪图，流程状态展现，流转信息，任务历史，任务分配信息
- 支持一个流程模型挂接多个业务单据，如某公司8种费用审批流程，表单不一样，但流程相同
- 支持一个表单挂接多个流程环节，以表单角度去管理流程，方便业务理解
- 支持指定任务办理人，认领任务等灵活办理业务功能
- 流程监控功能，模型监控、定义监控、实例监控、任务监控以及实例相关实体监控
- 表单建模器，传统的审批流，往往以表单的流动为视角进行流转，因此CCM Adapt Workflow使用了表单设计器,可以方便建模师快速设计出一套贴合业务的表单。
- 支持流程组件标签定义（流程按钮、意见审批、下一步流程信息等）快速与自定义的业务表单建立关系。
- 版本化管理流程，新调整的流程业务不影响正在运行，未结束的流程继续流转。

#### 监控平台

监控平台主要完成和支持以下功能：指标收集、调用链路、日志收集、监控告警、灾难恢复。

##### 指标收集

指标可以分为业务指标、应用指标、系统软件监控指标、系统指标。

应用监控指标如：可用性、异常、吞吐量、响应时间、当前等待笔数、资源占用率、请求量、日志大小、性能、队列深度、线程数、服务 调用次数、访问量、服务可用性等，业务监控指标如大额流水、流水区域、流水明细、请求笔数、响应时间、响应笔数等，系统监控指标如：CPU负载、内存负载、磁盘负载、网络IO、磁盘IO、TCP连接数、进程数等。

CCM Adapt 使用 `Spring Boot Actuator` 的 `/prometheus` 端点提供指标数据，使用 [Prometheus](https://prometheus.io) 采用指标数据，使用 [Grafana](https://grafana.com) 展示指标数据。

Prometheus 是由云原生计算基金会（CNCF：Cloud Native Computing Foundation）孵化的开源监控工具项目，并于2018年由基金会宣布毕业。其主要特性如下：

- 高维度数据模型
- 高效的时序数据存储能力
- 查询语言灵活
- 具体时序数据图形化展现的能力
- 易于运维
- 提供丰富的客户端开发库
- 告警中心功能全面

##### 调用链路

随着微服务架构的流行，服务按照不同的维度进行拆分，一次请求往往需要涉及到多个服务。互联网应用构建在不同的软件模块集上，这些软件模块，有可能是由不同的团队开发、可能使用不同的编程语言来实现、有可能部署在多台服务器，横跨多个不同的数据中心。因此，就需要一些可以帮助理解系统行为、用于分析性能问题的工具，以便发生故障的时候，能够快速定位和解决问题。想要在这个上下文中理解分布式系统的行为，就需要监控那些横跨了不同的应用、不同的服务器之间的关联动作。

CCM Adapt 支持 [Zipkin2](https://zipkin.io)，[Jaeger](https://www.jaegertracing.io/)。

Zipkin 被 Spring Cloud Sleuth 集成，使用广泛而稳定，且具有良好的开源社区环境，也是 CCM Adapt 默认选用的调用链路追踪技术。

Jaeger 是受 Dapper 和 Zipkin 的启发，由 Uber 创建的分布式追踪平台，捐赠给云原生计算基金会（CNCF：Cloud Native Computing Foundation）。它可以用于监视基于微服务的分布式系统:

- 分布式上下文传播
- 分布式事务监控
- 异常根原分析
- 服务依赖关系分析
- 性能/延迟优化

##### 日志收集

目前主流的日志收集发展趋势有以下几个特点：

- 满足系统与被收集的应用系统关系解耦，方便与被收集应用的部署，升级。
- 具有可扩展性，在海量数据量增长的情况下，只需要进行负载均衡或者增加节点即可。
- 在高并发和数据实时环境中也能良好运转。
- 可以灵活的对接到监控。
- 数据可视化清晰，展示最终结果数据正确率高。

CCM Adapt 提供两套日志收集的方案，分别用于不同的场景。

**Promtail + Loki + Grafana**

Loki 是一个可水平可扩展、高可用性、多租户日志聚合系统。它的设计非常轻量化，易于操作。它不为日志内容建立索引，而是为每个日志流建立一组标签。

**ELK（ElasticSearch + Logstash、Filebeat + Kibana）**

ElasticSearch 是一个基于 Lucene 构建的开源的分布式的搜索引擎。设计用于云计算中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。ELK 中主要用于数据的永久性存储。

### 平台特性

#### 安全特性

要将 `Spring Security` 与单个 Web 页面应用程序一起使用，需要 Ajax 登录、注销、错误视图。

默认情况下，CCM Adapt 带有 4 个不同的用户：

- “system”, 当自动完成某项操作时，主要由审计日志使用
- “anonymousUser”, 匿名用户在执行操作时分配
- “user”, 具有”ROLE_USER”授权的普通用户。它的默认密码是”user”
- “admin”, 具有”ROLE_USER”和”ROLE_ADMIN”授权的管理员用户。它的默认密码是”admin”

系统内建的用户可能包含如下角色：

- ROLE_ADMIN: 管理员，可访问内嵌监控平台
- ROLE_USER: 普通业务用户
- ROLE_ENDPOINT_ADMIN: 监控端点管理员，可远程执行端点的操作，如修改日志级别
- ROLE_ENDPOINT_USER: 监控端点用户，可通过端点获取数据
- ROLE_CONFIG_ADMIN: 配置管理员，可修改配置中心的配置
- ROLE_CONFIG_USER: 配置用户，可以从配置中心读取配置

CCM Adapt 提供了 3 种主要的安全机制：

- JSON Web令牌（JWT）
- 基于会话的身份验证
- OAuth2 和 OpenID Connect

##### JSON Web令牌（JWT）

[JSON Web令牌（JWT）](https://jwt.io/) 身份验证是一种无状态的安全机制，因此，如果要在多台不同的服务器上扩展应用程序，它是一个不错的选择。

请注意，这是使用微服务架构时的默认选项。

默认情况下，`Spring Security` 不存在这种身份验证机制，它是 [Java JWT 项目](https://github.com/jwtk/jjwt) 的特定于 CCM Adapt 的集成。

该解决方案使用一个安全的令牌，其中包含用户的登录名和权限。由于令牌已签名，因此用户无法更改。

##### 基于会话的身份验证

这是经典的 `Spring Security` 认证机制。它使用 HTTP 会话，因此它是一种有状态的机制：如果打算在多个服务器上扩展应用程序，则需要具有带有粘性会话的负载均衡器，以便每个用户的所有访问都位于同一台服务器上，或者使用 `Spring Session Data Redis`、 `Spring Session Hazelcast` 等分布式 Session 技术。

**Cookie盗窃保护**

CCM Adapt 添加了非常完整的 cookie 盗窃保护机制：将安全性信息存储在 cookie 中以及数据库中，并且每次用户登录时，都会修改这些值并检查它们是否被更改。这样，如果用户窃取了 Cookie，最多只能使用一次。

**CSRF保护**

`Spring Security` 和 `Angular` 都具有现成的 CSRF 保护功能，但不幸的是，它们没有使用相同的 Cookie 或 HTTP 头部！实际上根本没有针对 CSRF 攻击的保护。CCM Adapt 将重新配置这两个工具，以便它们可以正确地协同工作。

##### OAuth2 和 OpenID Connect

OAuth 是一种有状态的安全性机制，类似 HTTP 会话。Spring Security 提供了出色的 OAuth 2.0 和 OIDC 支持，CCM Adapt 利用了这一点。如果您不确定什么是 OAuth 和 OpenID Connect（OIDC），请参阅 [OAuth到底是什么](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth)。

**Keycloak**

Keycloak 是 CCM Adapt 配置的默认 OpenID Connect 服务器。

Keycloak 默认情况下使用嵌入式 H2 数据库，因此，如果重新启动 Docker 容器，将失去创建的用户。为了保留您的数据，请阅读 [Keycloak Docker 文档](https://hub.docker.com/r/jboss/keycloak/)。保留 H2 数据库的一种解决方案是执行以下操作：

- 添加持久化卷: `./keycloak-db:/opt/jboss/keycloak/standalone/data`
- 更改迁移策略 `OVERWRITE_EXISTING`为`IGNORE_EXISTING` (在命令部分)

在生产中，Keycloak 要求使用 HTTPS。有几种方法可以实现此目的，包括使用将管理 HTTPS 的反向代理或负载均衡器。建议阅读 [Keycloak HTTPS 文档](https://www.keycloak.org/docs/latest/server_installation/index.html#setting-up-https-ssl)以了解有关此主题的更多信息。

#### 国际化

国际化（或 `i18n`）是 CCM Adapt 中的一等公民，因为我们认为应该在项目开始时就进行设置（而不是事后考虑）。

CCM Adapt 国际化分为前端业务国际化和后端响应消息国际化。

#### API 错误

为了处理 Spring MVC REST 错误，CCM Adapt 使用 `Zalando` 的 `Problem Spring Web` 库来提供丰富的，基于 JSON 的错误消息。

为了帮助终端用户，对于每个已知问题，该库都将提供指向特定错误页面的链接，该页面将提供更多详细信息。这些链接在 `ErrorConstants` 类中配置，默认情况下指向该网站。在应用程序中，应该自定义这些链接，并将它们指向自己的 API 文档。

以下是常用的错误：

- 带有消息提示的错误
- 违反约束
- 参数化消息出现问题
- 找不到实体
- 无效的密码
- 电子邮件已经使用
- 登录名已使用
- 电子邮件无法找到

#### TLS 和 HTTP/2

TLS是具 `https://` URL时使用的协议，并且在现代浏览器中使用 HTTP/2 是必需的。

CCM Adapt 具有用于配置 TLS 和 HTTP/2 的特定配置，并且使事情变得更加简单：

- 应用程序生成时生成自签名证书
- 提供了特定的 tls 配置文件

在测试时，由于证书是自签名的，因此浏览器将发出警告，并且将需要忽略它（或将其导入）以访问该应用程序。

