

# 小程序分享  如何构建less


说在前边

npm install creatwxapp-cli -g

然后执行

creatWxappTp init wxapp(这个随便写 想叫什么叫什么)


1: 

从git上clone 模板后

cd 到 less目录  npm install --save-dev   然后执行 npm run dev

less 目录下的app.js   会读取 miniapp目录下 app.json文件  拿到 pages(这是小程序所有页面)  和 _dbcomponent(这是小程序的所有组件  需要手动维护到这个字段里边, 如果新增获删除  重新启动 npm run dev) , 会在当前目录的less 文件下查找是否有对应 页面或者组件的less文件  如果没有会创建,创建规则 见app.js

app.js 会 watch less 下的less 文件 当文件修改是 会将less文件编译 build到 miniapp对应的文件下
 
2:
miniapp 目录是微信开发工具 需要的目录














