const watch = require('node-watch');
const path = require('path');
const exec = require('child_process').exec;
const fs = require("fs");

// 页面的列表
let paegs=JSON.parse(fs.readFileSync(path.resolve('../miniapp/app.json'), 'utf-8')).pages

// 组件的列表
let components=JSON.parse(fs.readFileSync(path.resolve('../miniapp/app.json'), 'utf-8'))._dbcomponent
paegs=paegs.concat(components)

const fileNameArr=[]
paegs.forEach(item => {
    fileNameArr.push(item.replace(/\//g,'_')+'.less') 
});
let less=[]

fs.readdir(path.resolve('./less'),function(err,files){
    console.log(files)
    less=files
    if(err){
        console.warn(err)
    }else {
        fileNameArr.forEach(item=>{
            if(files.findIndex(it=>{ return (item===it) })==-1){
                console.warn('当前less目录下，没有找到对应小程序的less文件',item.replace(/_/g,'/'))
                let newFile='./less/'+item
                fs.writeFile(newFile, '@import "./base.less";', function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    fs.readFile(newFile, 'utf-8', function(err, data) {
                        if (err) {
                            throw err;
                        }
                        console.log(data,'成功创建 '+item+' 文件');
                    });
                });
            }
        })
    }
})

// 观察less目录 
var watcher=watch('./less', { recursive: true }, function(evt, name) {
    // console.log(path.basename(name, '.less'),'-----------修改了',evt,name)
    if(path.basename(name, '.less')=='base'){
        // 如果base.less 修改 重新编辑所有less 文件
        let arr =less.filter(item=>{
            return item!='base.less'
        })
        arr.forEach(item=>{
            let filePath='../miniapp/'+(path.basename(item, '.less')).replace(/_/g,'/')+'.wxss'
            let newFilePath = path.resolve(__dirname,filePath);
            console.log('less构建中......',newFilePath)
            exec("lessc " +name.replace('base.less',item) + " > " + newFilePath, function(error, stdout, stderr){
                error && console.log('----error---',error,'---------------error');
            });
        })
    }else {
        if(fileNameArr.findIndex(item=>{ return item===path.basename(name)})==-1){
            console.warn('当前less目录下，没有找到对应小程序的less文件')
            return
        }else {
            let filePath='../miniapp/'+(path.basename(name, '.less')).replace(/_/g,'/')+'.wxss'
            var newFilePath = path.resolve(__dirname,filePath);
            console.log('less构建中......',newFilePath)
            exec("lessc " + name + " > " + newFilePath, function(error, stdout, stderr){
                error && console.log('----error---',error,'---------------error');
            });
        }
    }
});

  
