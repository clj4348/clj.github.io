$(function(){
  let switchOn = true;
  let slideBarHtml = `<div class="slide-mask"></div>
      <div class="slide-meun">
        <div class="slider-bar">
          <ul>
            <li>
              <a href="index.html">
                <h4 class="nav-en">HOME</h4>
                <div class="line"></div>
                <h6 class="nav-cn">首页</h6>
              </a>
            </li>
            <li>
              <a href="contact.html">
                <h4 class="nav-en">CONTACT</h4>
                <div class="line"></div>
                <h6 class="nav-cn">联系</h6>
              </a>
            </li>
            <li>
              <a href="about.html">
                <h4 class="nav-en">ABOUT</h4>
                <div class="line"></div>
                <h6 class="nav-cn">关于</h6>
              </a>
            </li>
            <li>
              <a href="works.html">
                <h4 class="nav-en">WORKS</h4>
                <div class="line"></div>
                <h6 class="nav-cn">案例</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>`

  let logoAndMenuBtnHtml = `<div class="menu-button">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      </div>
      <a href="index.html" class="logo">
        <img src="images/index/logo.png">
      </a>`

  let copyTemplate = `<div class="scoll-top">
    <div class="scoll-top-text">TOP</div>
      <div class="scoll-top-line"></div>
    </div>
    <ul class="copy-ul clearfix">
      <li>
        <a href="works.html">
          <h4>精彩案例</h4>
          <span>WORK</span>
          <div class="hr">
            <span></span>
          </div>
        </a>
      </li>
      <li>
        <a href="https://github.com/clj4348">
          <h4>开源项目</h4>
          <span>github</span>
          <div class="hr">
            <span></span>
          </div>
        </a>
      </li>
    </ul>
    <div class="copy-bottom">
      <p class="title">谈谈你的故事，联系我，一起创作惊艳之作</p>
      <ul class="copy-contact-list">
        <li>
          <a href="javascript:;" title="1136284348">
            <img src="images/index/qq.png" alt="QQ">
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="images/index/wechat.png" alt="微信">
          </a>
        </li>
        <li>
          <a href="tel:1360024482" title="13600024482">
            <img src="images/index/phone.png" alt="联系方式">
          </a>
        </li>
      </ul>
      <div class="copyright">Copyright © 蓝~风</div>
    </div>`

  $('.copy-container').html(copyTemplate)
  $('.logo-menu-button').html(logoAndMenuBtnHtml)
  $('.slide-meun-container').html(slideBarHtml)
  // 划入 
  slideBarOn = () =>{
    $('.menu-button').addClass('cross');
    $('.slide-meun').css({
        'right': '0'
    });
    $('.slide-mask').fadeIn();
  }
  // 滑出
  slideBarOff = () =>{
    $('.menu-button').removeClass('cross');
    $('.slide-meun').css({
      'right': '-100%'
    });
    $('.slide-mask').fadeOut();
  }
  $('.menu-button').on('click',() => {
    if(switchOn){
      switchOn = false; 
      slideBarOn(); 
    }else{
      switchOn = true;
      slideBarOff();
    }
    
  });
  // 更新符号


  $('.slide-mask').on('click', () => {
    switchOn = true;
    slideBarOff();
  });
  $('.scoll-top-text').on('click', ()=>{
    $('body, html').animate({
      scrollTop: '0'
    })
  })
})