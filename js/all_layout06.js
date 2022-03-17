$(function(){
//////////////////////////////

// topBanner : lee 2022.03.17 수정
function topbannerHandler() {
   // $('topBanner').hide(); //display ;none;
   $('.topBanner').slideUp();
}
$('.topBanner .container i').on('click',topbannerHandler);


$('.visualSlide').slick({
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
});













//////////////////////////////
})