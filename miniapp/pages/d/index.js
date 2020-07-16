//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
       good:{},
       goodsList:[]
    },
    onLoad: function () {
        
    },

    onShareAppMessage: function () {
        return {
            title: '标题',
            path: '/pages/a/index'
        }
    }
})
