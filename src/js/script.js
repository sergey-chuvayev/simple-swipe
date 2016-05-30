var events = {
    event1: '%eventHTML1%',
    event2: '%eventHTML2%',
    event3: '%eventHTML3%',
    event4: '%eventHTML4%',
    event5: '%eventHTML5%',
    event6: '%eventHTML6%',
    event7: '%eventHTML7%',
    event8: '%eventHTML8%',
    event9: '%eventHTML9%',
    event10: '%eventHTML10%'
}


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