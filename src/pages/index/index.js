const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));

// 获取应用实例
const app = getApp(); //  eslint-disable-line no-undef

Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},
	// 事件处理函数
	bindViewTap() {
		wx.navigateTo({
			url: '../user/user',
		});
	},
	onLoad() {
    
       
	}
});