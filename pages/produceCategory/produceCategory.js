// pages/category/category.js
const app = getApp();

Page({
  data: {
    categories: [
      { id: 1, name: '水果' },
      { id: 2, name: '蔬菜' },
      { id: 3, name: '粮食' },
      { id: 4, name: '肉类' },
    ],
    products: [],
    selectedCategoryId: 1,
  },

  onLoad: function (options) {
    
  },

  onShow: function() {
    console.log("onShow");
    const selectedCategoryId = getApp().globalData.selectedCategoryId || 1;
    console.log("selectedCategoryId", selectedCategoryId);
    this.setData({
      selectedCategoryId: selectedCategoryId
    })
    this.loadProducts(selectedCategoryId);
  },

  onCategorySelect: function (event) {
    const categoryId = event.currentTarget.dataset.id;
    this.setData({
      selectedCategoryId: categoryId,
    });
    this.loadProducts(categoryId);
  },

  loadProducts: function (categoryId) {
    wx.request({
      url: `http://localhost:3000/api/categories/${categoryId}/produces`,
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({
            products: res.data
          });
        }
      }
    });
  },

  onProductSelect: function (event) {
    const productId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/productDetail/productDetail?id=${productId}`,
    });
  },

  onAddToCart: function (event) {
    const productId = event.currentTarget.dataset.id;
    // 处理加入购物车逻辑
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
    });
  },
});