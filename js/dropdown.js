$(document).ready(function(){
	
$('.main-item').click(function () {
    $(this).next().slideToggle();
    $(this).children('li').toggleClass('actingwhite actingblack');
    $(this).parent('ul.listopen, ul.listclose').toggleClass('listopen listclose');
    if($(this).children('li').hasClass('arrow') || $(this).children('li').hasClass('arrow-down')) {
    $(this).children('li').toggleClass('arrow arrow-down');
    }
});

});