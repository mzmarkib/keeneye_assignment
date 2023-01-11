$(document).ready(function () {
	// why travel slider
	$(".why-travel .slider").slick({
		speed: 900,
		centerMode: true,
		slidesToShow: 3,
		autoplay: true,
		draggable: false,
		swipe: false,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	// travel packages slider
	$(".travel-packages .slider").slick({
		speed: 900,
		centerMode: true,
		slidesToShow: 3,
		autoplay: false,
		draggable: false,
		swipe: false,
		arrows: true,
		prevArrow: $(".travel-packages .slide-prev"),
		nextArrow: $(".travel-packages .slide-next"),
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	// travel destinations video player
	const player = new Plyr("#destination-player", {
		// iconUrl: "images/video_play_icon.svg",
	});
});
