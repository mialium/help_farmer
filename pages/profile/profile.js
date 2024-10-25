// profile.js
Page({
    data: {
        hasUserInfo: false,
        canIUseGetUserProfile: wx.canIUse("getUserProfile"),
        canIUseNicknameComp: wx.canIUse("input.type.nickname"),

        modalVisible1: false,
        modalVisible2: false,
        inputValue1: "",
        inputValue2: "",
        showAboutUsModal: false,
        showContactUsModal: false,
        qrCodeUrl: "https://loremflickr.com/320/240",
    },

    // 导航到我的订单页面
    navigateToOrders: function () {
        wx.navigateTo({
            url: "/pages/orders/orders",
        });
    },

    // 导航到我的收藏页面
    navigateToFavorites: function () {
        wx.navigateTo({
            url: "/pages/favorites/favorites",
        });
    },

    // 导航到收货地址页面
    navigateToAddresses: function () {
        wx.navigateTo({
            url: "/pages/addresses/addresses",
        });
    },

    // 导航到设置页面
    navigateToSettings: function () {
        wx.navigateTo({
            url: "/pages/settings/settings",
        });
    },

    // 导航到联系客服页面
    navigateToContact: function () {
        wx.navigateTo({
            url: "/pages/contact/contact",
        });
    },

    onLoad() {
        // 从本地存储中加载之前保存的内容
        this.setData({
            inputValue1: wx.getStorageSync("inputValue1") || "",
            inputValue2: wx.getStorageSync("inputValue2") || "",
        });
    },

    showPopup1() {
        this.setData({
            PopupVisible1: true,
        });
    },

    showAboutUs() {
        this.setData({
            PopupVisible2: true,
        });
    },

    handleInput1(e) {
        this.setData({
            inputValue1: e.detail,
        });
        wx.setStorageSync("inputValue1", e.detail);
    },

    handleInput2(e) {
        this.setData({
            inputValue2: e.detail,
        });
        wx.setStorageSync("inputValue2", e.detail);
    },

    closePopup1() {
        this.setData({
            modalPopup1: false,
        });
    },

    closePopup2() {
        this.setData({
            modalPopup2: false,
        });
    },

    showAboutUsModal() {
        this.setData({
            showAboutUsModal: true,
        });
    },

    showContactUsModal() {
        this.setData({
            showContactUsModal: true,
        });
    },
});
