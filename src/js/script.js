$(function() {
    // var startPos = 0;
    // var $slider = $(".inner-frame");

    // $slider.css('transform','translateX(0px)'); // init translate 0px
    // var currentTranslate = $slider.css('transform').split(',')[4];

    // $slider.on("touchstart",function(e){
    //     startPos = e.originalEvent.touches[0].pageX;
    // }).on("touchmove", function(e){
    //     var pos = e.originalEvent.touches[0].pageX;
        
    //     var newPos = currentTranslate + pos;
    //     console.log(pos)
    //     $(e.currentTarget).css('transform','translateX('+ (currentTranslate+pos) +'px)');
    // })
    // .on("touchend", function(e){
    //     var endPos = e.originalEvent.changedTouches[0].pageX;
    //     if (startPos > endPos) {
    //         console.log('left');
    //     } else {
    //         console.log('right');
    //     }
    // });

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
    });        
});