Page({
    data: {
        indicatorDots: true, // 是否显示面板指示点
        autoplay: true, // 是否自动切换
        interval: 5000, // 自动切换时间间隔
        duration: 500, // 滑动动画时长
        searchKeyword: '', // 用于存储搜索框输入的内容
        swiperItems: [
            "http://localhost:3000/images/swiper-1.jpg",
            "http://localhost:3000/images/swiper-2.jpg",
            "http://localhost:3000/images/swiper-3.jpg",
            "http://localhost:3000/images/swiper-4.jpg",
            "http://localhost:3000/images/swiper-5.jpg",
            "http://localhost:3000/images/swiper-6.jpg",
        ],
        produces: [] // 存储农产品的数组
    },
    onProduceCategoryTap: function (event) {
        const id = event.currentTarget.dataset.id
        getApp().globalData.selectedCategoryId = id
        wx.switchTab({
            url: '/pages/produceCategory/produceCategory',
        })
    },
    onLoad() {
        wx.request({
            url: 'http://localhost:3000/api/produces?isHot=1', // 替换为您实际的接口
            method: 'GET',
            success: (res) => {
                if (res.statusCode === 200) {
                    console.log(res.data)
                    this.setData({
                        produces: res.data // 假设返回的数据是图片URL的数组
                    });
                }
            }
        });
    },

    // 输入框的变化处理函数
    onSearchChange(event) {
        this.setData({
            searchKeyword: event.detail.value // 更新搜索关键词
        });
    },
    onSearch(event) {
        wx.navigateTo({
            url: `/pages/produceList/produceList?keyword=${event.detail.value}`,
        })
    }

});