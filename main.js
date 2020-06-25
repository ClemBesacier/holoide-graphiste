function juizScrollTo(element) {
    $(element).click(function () {
        var goscroll = false;
        var the_hash = $(this).attr("href");
        var regex = new RegExp("\#(.*)", "gi");
        var the_element = '';

        if (the_hash.match("\#(.+)")) {
            the_hash = the_hash.replace(regex, "$1");

            if ($("#" + the_hash).length > 0) {
                the_element = "#" + the_hash;
                goscroll = true;
            }
            else if ($("a[name=" + the_hash + "]").length > 0) {
                the_element = "a[name=" + the_hash + "]";
                goscroll = true;
            }

            if (goscroll) {
                $('html, body').animate({
                    scrollTop: $(the_element).offset().top
                }, 'slow');
                return false;
            }
        }
    });
};
juizScrollTo('a[href^="#"]');

$(document).ready(function () {
    $('.menu li').click(function () {
        $('.linkMenu').removeClass('active');
        $('.linkMenu').toggleClass('active');
    })

    $('.save').click(function () {
        $(this).toggleClass('active');
    })

    $('.account').click(function () {
        $('.myAccount').toggleClass('active');
    })
});

