例如：47.100.112.98 root/Hyj775523      106.14. 127. 10

mac中：sudo ssh 47.100.112.98
Password: 输入计算机的密码
[root@47.100.112.98@node02 ~]Password:输入远程服务器密码

/usr/local/node/git_db/

pm2 可以启动多个项目, 后台运行.

查看服务列表

```bash
[root@node02 git_db]# pm2 ls
┌──────┬────┬──────┬────────┬───┬──────┬───────────┐
│ Name │ id │ mode │ status │ ↺ │ cpu  │ memory    │
├──────┼────┼──────┼────────┼───┼──────┼───────────┤
│ npm  │ 0  │ fork │ online │ 0 │ 0.2% │ 30.9 MB   │
└──────┴────┴──────┴────────┴───┴──────┴───────────┘
```


停止服务

```bash
[root@node02 git_db]# pm2 stop 0
[PM2] Applying action stopProcessId on app [0](ids: 0)
[PM2] [npm](0) ✓
┌──────┬────┬──────┬─────────┬───┬─────┬────────┐
│ Name │ id │ mode │ status  │ ↺ │ cpu │ memory │
├──────┼────┼──────┼─────────┼───┼─────┼────────┤
│ npm  │ 0  │ fork │ stopped │ 0 │ 0%  │ 0 B    │
└──────┴────┴──────┴─────────┴───┴─────┴────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

第一次启动服务

```md
pm2 start  npm -- run dev
```


启动服务

```bash
[root@node02 git_db]# pm2 start 0
[PM2] Applying action restartProcessId on app [0](ids: 0)
[PM2] [npm](0) ✓
[PM2] Process successfully started
┌──────┬────┬──────┬────────┬───┬─────┬──────────┐
│ Name │ id │ mode │ status │ ↺ │ cpu │ memory   │
├──────┼────┼──────┼────────┼───┼─────┼──────────┤
│ npm  │ 0  │ fork │ online │ 0 │ 0%  │ 5.4 MB   │
└──────┴────┴──────┴────────┴───┴─────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

重启服务
```bash
[root@node02 git_db]# pm2 restart 0
Use --update-env to update environment variables
[PM2] Applying action restartProcessId on app [0](ids: 0)
[PM2] [npm](0) ✓
┌──────┬────┬──────┬────────┬───┬─────┬──────────┐
│ Name │ id │ mode │ status │ ↺ │ cpu │ memory   │
├──────┼────┼──────┼────────┼───┼─────┼──────────┤
│ npm  │ 0  │ fork │ online │ 1 │ 0%  │ 2.9 MB   │
└──────┴────┴──────┴────────┴───┴─────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

可以根据 id 或者 name 操作对应项目

