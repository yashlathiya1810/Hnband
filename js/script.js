$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    // pre-loader
    setTimeout(function () {
        $('.overlay1').fadeOut();
    }, 3000);

    // header sticky
    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $('.navbar-nav .nav-item a').click(function () {
        $('.navbar-nav .nav-item a').removeClass('active')
        $(this).addClass('active');
    });

    //  bottam to top arrow
    var btn = $('.bottam_to_top_arrow');
    btn.hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 },
            '1000');
    });
});