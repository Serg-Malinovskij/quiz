
window.addEventListener('DOMContentLoaded', function(){

	if(document.querySelector('.reviews__slider')){
		
		const reviewsSwiper = new Swiper('.reviews__slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,	
	centeredSlides: true,
	// pagination: {
  //   el: '.swiper-pagination',
	// 	clickable: true,
  // },
	// Navigation arrows
	navigation: {
		nextEl: '.reviews__button-next',
		prevEl: '.reviews__button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	 slidesPerView: 4,
	spaceBetween: 8,
	// Responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 10,
			// centeredSlides: true,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 12,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 8,
		},
	},
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',
});
}

// quiz-slider

if(document.querySelector('.quiz__slider')){
		
	const reviewsSwiper = new Swiper('.quiz__slider', {
// Optional parameters
direction: 'horizontal',
//loop: true,	
centeredSlides: true,
// pagination: {
//   el: '.swiper-pagination',
// 	clickable: true,
// },
// Navigation arrows
navigation: {
	nextEl: '.content-quiz__button_forward',
	prevEl: '.content-quiz__button_back',
},
clikable: true,
setWrapperSize: true,
autoHeight: true,
// Default parameters
 slidesPerView: 1,
spaceBetween: 8,
// Responsive breakpoints
// breakpoints: {
// 	320: {
// 		slidesPerView: 1,
// 		spaceBetween: 10,
// 	},
// 	767: {
// 		slidesPerView: 2,
// 		spaceBetween: 10,
// 		// centeredSlides: true,
// 	},
// 	992: {
// 		slidesPerView: 3,
// 		spaceBetween: 12,
// 	},
// 	1200: {
// 		slidesPerView: 4,
// 		spaceBetween: 8,
// 	},
// },
//	autoplay: {
// 	delay: 2000,
// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
// 	disableOnInteraction: true,
//},
 effect: 'fade',
 fadeEffect: {
	// Параллельная		смена прозрачности
	// Фон не накладывается друг на друга
	crossFade: true
},
});
}

})






