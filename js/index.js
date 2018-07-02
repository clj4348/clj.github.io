/*
* @Author: clj
* @Date:   2017-11-25 21:10:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-25 22:11:25
*/
var menuButton = document.querySelector('.menu-button');
var swiper = new Swiper('#slide-content', {
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
var swiperPage = new Swiper('#pageContainer', {
  direction: 'vertical',
  mousewheel:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});