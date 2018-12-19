/*
* @Author: clj
* @Date:   2017-11-25 21:10:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-25 22:11:25
*/


class index {
  init(){
    this.bindEvent();
  }
  bindEvent(){
    let swiperPage = new Swiper('#pageContainer', {
      slidesPerView: 'auto',
      initialSlide: 4,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      direction: 'vertical',
      mousewheel:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on:{
        init: function(){
          var slider = this;
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(swiperPage){ 
          swiperAnimate(this);
        } 
      }
    });
    let menuButton = document.querySelector('.menu-button');
    let swiperSlidrBar = new Swiper('#slide-content', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        init: function () {
          var slider = this;
          menuButton.addEventListener('click', function () {
            if (slider.activeIndex === 0) {
              slider.slideNext();  
            }else{
              slider.slidePrev();
            }
          }, true);
        },
        slideChange: function () {
          var slider = this;
          if (slider.activeIndex === 0) {
            menuButton.classList.add('cross');
          } else {
            menuButton.classList.remove('cross');
          }
        },
      }
  });
  }
}
$(function(){
  let home = new index()
  home.init();
})