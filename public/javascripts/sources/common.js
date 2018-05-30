$(() => {

	const abilityNameDesktop = $('.abilities__name--desktop');
	const abilityNameMobile = $('.abilities__name--mobile');
	const popup = $('#popup');

	$('.slider').slick({
		dots: true,
		arrows: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  autoplay: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: false
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$("#popup").iziModal({
		width: 1060,
		onClosed: onPopupClose,
		transitionIn: 'fadeIn',
    transitionOut: 'fadeOut'
	});

	function onPopupClose () {
		popup.find('.popup__video')[0].pause();
	}

	function onPosterClick (evt) {
		evt.preventDefault();
		const video = popup.find('video');
		const poster = $('.play');
		video.attr('src', `${$(this).attr('data-video')}.mp4`);
    popup.iziModal('open');
    video[0].play();
	}

	function onCrossClick () {
		popup.iziModal('close');
	}

	function onAbilityDesktopClick (evt) {
		let target = $(evt.target);
		let id = target.attr('href');
		evt.preventDefault();
		abilityNameDesktop.removeClass('abilities__name--active');
		target.addClass('abilities__name--active');
		$('.abilities__info').hide();
		$(`.abilities__info[data-id=${id}]`).show();
	}

	function onAbilityMobileClick (evt) {
		let target = $(evt.target);
		let id = target.attr('href');
		evt.preventDefault();
		abilityNameMobile.removeClass('abilities__name--active');
		target.addClass('abilities__name--active');
		$('.abilities__info-inner').hide();
		$(`.abilities__info[data-id=${id}]`).find('.abilities__info-inner').show();
	}

	function onBurgerClick () {
		const burger = $('.burger');
		const menu = $('.nav');
		if (burger.hasClass('burger--active')) {
			burger.toggleClass('burger--active');
			menu.hide();
		} else {
			burger.toggleClass('burger--active');
			menu.css('display', 'flex');
		}
	}

	$(document).on('click', '.play', onPosterClick);
	$(document).on('click', '.popup__close', onCrossClick);
	abilityNameDesktop.on('click', onAbilityDesktopClick);
	abilityNameMobile.on('click', onAbilityMobileClick);
	$('.burger').on('click', onBurgerClick);
})