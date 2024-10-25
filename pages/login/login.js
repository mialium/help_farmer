const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

Page({
  data: {
    motto: '欢迎您来到助农小站',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    errorMsg: '',  // 用于存储错误信息
  },
  
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail;
    const { nickName } = this.data.userInfo;
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    });
  },

  onInputChange(e) {
    const nickName = e.detail.value;
    const { avatarUrl } = this.data.userInfo;
    this.setData({
      "userInfo.nickName": nickName,
    
    });
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          errorMsg: ''
        });
        this.sendUserInfo(res.userInfo);
      }
    });
  },
  submitUserInfo() {
    const { avatarUrl, nickName } = this.data.userInfo;
  
    // 检查信息是否完整
    if (!avatarUrl || !nickName) {
      this.setData({ errorMsg: '请确保头像和昵称都已填写。' });
      return;
    }
  
    // 如果信息完整，可以调用发送用户信息的函数
    this.sendUserInfo(this.data.userInfo);
  },
  
  sendUserInfo(userInfo) {
    // 这里加入发送用户信息到后端的逻辑
    wx.request({
      url: '  http://localhost:3000/api/users', 
      method: 'POST',
      data: {
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName
      },
      success: (response) => {
        console.log("用户信息发送成功:", response.data);
        this.setData({ errorMsg: '' }); // 清空错误信息
        wx.redirectTo({ url: '/pages/home/home'});
      },
      fail: (error) => {
        console.error("用户信息发送失败:", error);
        this.setData({ errorMsg: '用户信息发送失败，请稍后再试。' });
      }
    });
  },

  onLoad() {
    // 页面加载时获取用户信息
    if (this.data.canIUseGetUserProfile) {
      this.getUserProfile();
    }
  }
});