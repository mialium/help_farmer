// pages/productDetail/productDetail.js
Page({
  data: {
    product: {},
    farmer: {},
  },

  onLoad: function (options) {
    const productId = options.id;
    // 模拟从服务器获取商品详情
    const product = {
      id: productId,
      name: '商品名称',
      price: 100,
      image: 'https://example.com/image1.jpg',
      video: 'https://example.com/video1.mp4',
      description: '商品描述信息',
    };
    const farmer = {
      image: 'https://example.com/farmer.jpg',
      video: 'https://example.com/farmer_video.mp4',
      description: '农民伯伯的介绍信息',
    };
    this.setData({
      product: product,
      farmer: farmer,
    });
  },

  onAddToCart: function () {
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
    });
  },
});