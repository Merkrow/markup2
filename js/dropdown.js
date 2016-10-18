$(document).ready(function(){
	
$('.main-item').click(function () {
    $(this).next().slideToggle();
    if($(this).children('li').hasClass('arrow') || $(this).children('li').hasClass('arrow-down')) {
    $(this).children('li').toggleClass('arrow arrow-down');
    }
});

});