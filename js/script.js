$(window).on('scroll', ()=> {
    if($(window).scrollTop()) {
        $('.navbar').addClass('active');
    } else {
        $('.navbar').removeClass('active');   
    }
});

$('.btn-menu').click(function(){
    $('.navbar').addClass('toggled');
});


$('.close-btn').click(function(){
    $('.navbar').removeClass('toggled');
});