Page({
  data: {
    cartItems: []
  },

  onLoad() {
    // 从本地存储或其他数据源加载购物车数据
    const cartItems = wx.getStorageSync('cartItems') || [];
    this.setData({
      cartItems: cartItems

    });
  },

  removeFromCart(event) {
    const itemId = event.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.filter(item => item.id !== itemId);
    this.setData({
      cartItems: cartItems
    });
    wx.setStorageSync('cartItems', cartItems);
  },

  checkout() {
    // 处理结算逻辑
    console.log('结算', this.data.cartItems);
  }
});