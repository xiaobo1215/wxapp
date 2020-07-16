

# 小程序分享  如何构建less


说在前边
node 版本 高一点

npm install creatwxapp-cli -g

creatWxappTp init wxapp(这个随便写 想叫什么叫什么)

如果报错 或者出现 奇异问题 可能是 没有将 creatWxappTp写入到 环境变量里边 

举例：
mac  
1：vim ~/.bash_profile   
2：alias creatWxappTp='/Users/xx/xxx/xxxx/node_modules/creatwxapp-cli/index.js'  安装完后看一下 全局安装到什么地方了
3：source ~/.bash_profile

win 就...吧

或者 ：

那就 这么搞 npm install creatwxapp-cli --save-dev    node_modules/.bin/creatWxappTp init wxapp

1: 

从git上clone 模板后

cd 到 less目录  npm install --save-dev   然后执行 npm run dev

less 目录下的app.js   会读取 miniapp目录下 app.json文件  拿到 pages(这是小程序所有页面)  和 _dbcomponent(这是小程序的所有组件  需要手动维护到这个字段里边, 如果新增或者删除  需要重新执行 npm run dev  ,因为 只有 npm run dev 的时候 才去 拿 pages 和 _dbcomponent 字段) 这两个字段的内容, 会在当前目录的less 文件下查找是否有对应 页面或者组件的less文件  如果没有 则创建,创建规则 见app.js

app.js 会 watch less 下的less 文件 当文件被修改   编译less文件   build到 miniapp对应的文件下

小程序 使用less 开发 完成
 
2:
miniapp 目录是微信开发工具 需要的目录














