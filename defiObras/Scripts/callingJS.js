$(window).scroll(function(){
    if ($(this).scrollTop() > 100)
        $('.scrolltop').fadeIn();
    else
        $('.scrolltop').fadeOut();
});

$(document).ready(function(){
    $('.scrolltop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
})
