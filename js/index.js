$(function() {
	var wW;

	function dropdownOpen() {
		wW = $(window).width();
		if(wW < 768) {
			$('.banner li img').each(function() {
				$(this).attr("src", $(this).attr("data-src"));
			});
		}
		if(wW >= 768) {
			$('.banner li img').each(function() {
				$(this).attr("src", $(this).attr("x-src"));
			});
		}
	}
	dropdownOpen();

	var slideT = true;
	$('.hamburger').click(function(argument) {
		if(slideT == true) {
			$(this).addClass('is-active');
			$('.nav_1').slideDown()
			slideT = false;
		} else if(slideT == false) {
			$(this).removeClass('is-active');
			$('.nav_1').slideUp()
			slideT = true;
		}
	});

	function mousevoerslide() {
		wW = $(window).width();
		$('.nav_2').on('mouseover', function() {
			if(wW > 768) {
				$(this).children('.bg_nav').stop(false).slideDown(150);
				$('.nav_3 li').css({
					'opacity': '1.0',
					'transform': 'translateY(0)'
				})
			}
		}).on('mouseleave', function() {
			if(wW > 768) {
				$('.bg_nav').stop(false).slideUp(150);
				$('.nav_3 li').css({
					'opacity': '0',
					'transform': 'translateY(-10px)'
				})
			}
		});
		$('.navact').on('click', function() {
			if(wW <= 768) {
				var display = $(this).next('.bg_nav').css('display');
				if(display == 'none') {
					$(this).next('.bg_nav').slideDown();
					$(this).parent().siblings().find('.bg_nav').slideUp();
				} else if(display == 'block') {
					$(this).next('.bg_nav').slideUp();
				}
			}
		});
	}
	$('.footer_nav_tit').on('click', function() {
		if(wW <= 768) {
			var hideIn = $(this).parent().find('li').css('display');
			if(hideIn == 'none') {
				$(this).find('.plus').css({
					'transform': 'rotate(45deg)',
					'-webkit-transform': 'rotate(45deg)',
					'-moz-transform': 'rotate(45deg)',
					'-ms-transform': 'rotate(45deg)'
				})
				$(this).parent().find('li').slideDown();
				$(this).parent().siblings().find('.plus').css({
					'transform': 'rotate(0deg)',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)'
				})
				$(this).parent().siblings().find('li').slideUp();
			} else if(hideIn == 'list-item') {
				$(this).parent().find('li').slideUp();
				$(this).find('.plus').css({
					'transform': 'rotate(0deg)',
					'-webkit-transform': 'rotate(0deg)',
					'-moz-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)'
				})
			}
		}
	});

	function clickslide() {
		wW = $(window).width();
	}
	mousevoerslide();
	$(window).on('resize', function() {
		wW = $(window).width();
		$('.hamburger').removeClass('is-active');
		slideT = true;
		if(wW > 768) {
			$('.dl ul li').css('display', 'list-item');
			$('.nav_1').css('display', 'block');
		} else if(wW <= 768) {
			$('.dl ul').find('.plus').css({
				'transform': 'rotate(0deg)',
				'-webkit-transform': 'rotate(0deg)',
				'-moz-transform': 'rotate(0deg)',
				'-ms-transform': 'rotate(0deg)'
			});
			$('.dl ul li').css('display', 'none');
			$('.nav_1').css('display', 'none');
		}
		wW = $(window).width();
		dropdownOpen();
	});
	$(window).scroll(function() {
		var hH = $(window).height();
		var hTop = $(window).scrollTop();
		if(hTop > hH) {
			$('.go_top').fadeIn();
		} else if(hTop < hH) {
			$('.go_top').fadeOut();
		}
		if(hTop > 1) {
			$('.top_con').addClass('box_shaw');
		} else if(hTop < 1) {
			$('.top_con').removeClass('box_shaw');
		}
	});
	$('.go_top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		});
	});
});