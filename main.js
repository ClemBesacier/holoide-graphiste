$(document).ready(function () {
    $('.menu li').click(function () {
        $('.linkMenu').removeClass('active');
        $('.linkMenu').toggleClass('active');
    })

    $('.save').click(function () {
        $(this).toggleClass('active');
    })
});