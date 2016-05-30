


$(function() {
   
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

    

    function registerCurrentSlideEvent(slideNum) {
        $.get(events['event'+slideNum], function () {
            //sent
        })
    }

});