class blog {
	// 构造函数
	constructor() {
		this.strTitle = '精彩案例';
		this.strDesc = 'Do More, Speak Less';
		this.index = 0; // 中文的初始值
		this.i = 0; // 英文的初始值
		this.timer = null; // 时间函数
	}
	
	init() {
		this.typeing();
	}
	
	// 打字效果函数
	typeing() {
		let _this = this;
		this.timer = setInterval(function () {
			$('.blog-ad p:eq(0)').html(_this.strTitle.slice(0, _this.index++) + '|');
			if (_this.index >= _this.strTitle.length) {
				$('.blog-ad p:eq(0)').html(_this.strTitle);
				$('.blog-ad p:eq(1)').html(_this.strDesc.slice(0, _this.i++) + '|');
			}
			if (_this.i >= _this.strDesc.length) {
				clearInterval(_this.timer);
				$('.blog-ad p:eq(1)').html(_this.strDesc);
			}

		}, 300);

	}
}
$(function () {
	let blogPage = new blog();
	blogPage.init();
})
