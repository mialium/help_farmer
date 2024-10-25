const app = getApp();

Page({
    data: {
        keyword: "",
        products: [],
       
    },

    onLoad: function (options) {
        const keyword = options.keyword;
        this.setData({
            keyword: keyword,
        });

        // 调用接口获取搜索结果
        this.fetchProducts(keyword);
    },

    fetchProducts: function (keyword) {
        wx.request({
            url: `http://localhost:3000/api/produces?name=${keyword}`, // 替换为您实际的接口
            method: "GET",
            success: (res) => {
                if (res.statusCode === 200) {
                    this.setData({
                        products: res.data, // 假设返回的数据是图片URL的数组
                    });
                }
            },
        });
    },
    onCartBtnTap: function (event) {
        const { id, name, price, quantity = 1 } = event.currentTarget.dataset;
        app.globalData.shoppingCartItems.push({ id, name, price, quantity });
    },
});
