
## 常见的 hadoop 操作命令

```
#cat 数据
hadoop fs -cat /usr/hive/warehouse/hivewithhdfs.db/record/data.txt
#修改目录或者文件权限
hadoop fs -chmod -R 777 /usr
#改变文件或者目录 owner
hadoop fs -chown -R root:root /usr
#创建文件夹
hadoop fs -mkdir <paths>
#本地文件发送到 HDFS 上
hadoop fs -put <localsrc> ... <dst>
#拷贝本地文件到 HDFS 上
hadoop fs -copyFromLocal <localsrc> URI
#查看文件或者目录的存储使用量
hadoop fs -du URI [URI …]
#删除文件
hadoop fs -rm URI [URI …]
#设置目录或者文件的拷贝数
hadoop fs–setrep [-R] [-w] REP PATH [PATH …]
#检查集群文件坏块
hadoop fsck <path> [-move | -delete | -openforwrite] [-files [-blocks [-locations | -racks]]]
```



## hadoop fs、hadoop dfs、hdfs fs、hdfs dfs区别

hadoop fs 是一个综合的命令，可以执行 hdfs dfs 的所有命令，也可以执行 hadoop dfs 的所有命令，但是 hdfs dfs 不能执行 hadoop fs 的所有命令。

hadoop dfs 是 hadoop fs 的一个子集，hadoop fs 是 hadoop dfs 的一个超集。 (已经废弃)

hdfs dfs 是 hadoop fs 的一个子集，hadoop fs 是 hdfs dfs 的一个超集。（已经废弃）

hdfs fs 是 hdfs dfs 的一个子集，hdfs dfs 是 hdfs fs 的一个超集。

