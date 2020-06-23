$(document).ready(function () {
    $('.menu li').click(function () {
        $('.linkMenu').removeClass('active');
        $('.linkMenu').toggleClass('active');
    })
});