


$(function() {

    initImages();
   
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        
        pagination: '.swiper-pagination',
        
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        preloadImages: false,
        lazyLoading: true,
        onSlideChangeEnd: function(e){
            var currentSlide = e.activeIndex;
            if (e.activeIndex === e.slides.length - 1) {
                currentSlide = 1;
            } else if (e.activeIndex === 0) {
                currentSlide = e.slides.length - 2;
            }
            registerCurrentSlideEvent(currentSlide);

        }
    });

    function initImages() {
        for (var i = 0; i < images.length; i++) {
            $('.swiper-container .swiper-wrapper').append('<div class="swiper-slide"><img class="slide" src="'+ images[i] +'" alt=""></div>');
        };
    }

    function registerCurrentSlideEvent(slideNum) {
        $.get(events['event'+slideNum], function () {
            //sent
        })
    }

});