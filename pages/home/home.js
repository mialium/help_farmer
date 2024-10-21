// home.js
Page({
  data: {
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 5000, // 自动切换时间间隔
    duration: 500, // 滑动动画时长
    searchKeyword: '', // 用于存储搜索框输入的内容
    images: [] // 存储图片URL的数组
  },
  
  onLoad() {
    // 页面加载时请求图片数据
    wx.request({
      url: 'http://localhost:3000/api/images', // 替换为您实际的接口
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          console.log(res.data)
          this.setData({
            images: res.data // 假设返回的数据是图片URL的数组
          });
        }
      }
    });
  },
  
  // 输入框的变化处理函数
  onInputChange(event) {
    this.setData({
      searchKeyword: event.detail.value // 更新搜索关键词
    });
  }
});