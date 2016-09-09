


$(function() {

    initImages();

    $('.swiper-container').click(function() {
        
    });
   
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
            $('#main-link').attr('href', clickEvents["event"+currentSlide]);
            
            if (e.activeIndex === e.slides.length - 1)
                currentSlide = 1;
            if (e.activeIndex === 0)
                currentSlide = e.slides.length - 2;
            
            registerCurrentSlideEvent(currentSlide);

        }
    });

    function initImages() {
        for (var i = 0; i < images.length; i++) {
            $('.swiper-container .swiper-wrapper').append('<div class="swiper-slide"><img class="slide" src="'+ images[i] +'" alt=""></div>');
        };
    }

    function registerCurrentSlideEvent(slideNum) {
        console.log(slideNum, 'viewedasdasd');
        $.get(viewEvents['event'+slideNum], function () {
            //sent
            console.info('event sent');
        })
    }

});