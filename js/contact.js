class contact {
	// 构造函数
	constructor() {
		this.strTitle = '精彩案例';
		this.strDesc = 'Do More, Speak Less';
		this.index = 0; // 中文的初始值
		this.i = 0; // 英文的初始值
		this.timer = null; // 时间函数
	}
	
	init() {
		this.bindEvent();
	}
	bindEvent() {
		$('.user-img-box').on('click', function(){
			$('.contact-tit').fadeOut(500);
			$(this).fadeOut(500,function(){
				$('.left-door').animate({
					'left': '-50%'
				}, 800)
				$('.right-door').animate({
					'right': '-50%'
				}, 800,function(){
					$('.container-content').fadeIn()
				})
			});
		})
		$('.close').on('click', function(){
			$('.container-content').fadeOut(300,function(){
				$('.left-door').animate({
					'left': '0'
				}, 800)
				$('.right-door').animate({
					'right': '0'
				}, 800, function(){
					$('.user-img-box').fadeIn(500)
					$('.contact-tit').fadeIn(500);
				})
			})
		})
	}
}
$(function () {
	let contactPage = new contact();
	contactPage.init();
})
