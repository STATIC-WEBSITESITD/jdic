   $("a.pagescroll").on("click", function (e) {
            var anchor = $(this);
            $("html, body")
                .stop()
                .animate({ scrollTop: $(anchor.attr("href")).offset().top - 100 }, 1500);
            e.preventDefault();
        });
 var secondNavSliderVar = new Swiper(".secondNavSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        navigation: {
            nextEl: '.secodaryNav .swiper-button-next',
            prevEl: '.secodaryNav .swiper-button-prev',
        },
    });

    var blogSliderVar = new Swiper(".blogSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        navigation: {
            nextEl: '.blogSliderActive .swiper-button-next',
            prevEl: '.blogSliderActive .swiper-button-prev',
        },
        pagination: {
            el: ".blogSliderActive .swiper-pagination",
            dynamicBullets: true,
        },
    });

$(function () {
    $(".services_slider").each(function () {
        if (this.classList.contains('swiper-initialized')) return;

        var swiper = new Swiper(this, {
        speed: 1000,
        parallax: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    });

    $(".services_slider:not(.swiper-initialized)").on("mouseenter", function () {
        if (this.swiper) this.swiper.autoplay.stop();
    });

    $(".services_slider:not(.swiper-initialized)").on("mouseleave", function () {
        if (this.swiper) this.swiper.autoplay.start();
    });
});
// *******
$(function () {
    var swiper = new Swiper(".team_slider_1", {
        speed: 1000,
        parallax: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    $(".team_slider").on("mouseenter", function () {
        swiper.autoplay.stop();
    });

    $(".team_slider").on("mouseleave", function () {
        swiper.autoplay.start();
    });
});

$(function () {
    var swiper = new Swiper(".recent_slider", {
        speed: 1000,
        parallax: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    $(".recent_slider").on("mouseenter", function () {
        swiper.autoplay.stop();
    });

    $(".recent_slider").on("mouseleave", function () {
        swiper.autoplay.start();
    });
});
// *******
$(function () {
    var element = $("#back2top");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            element.addClass("active");
            element.stop().animate({ opacity: 1 }, 300);
        } else {
            element.removeClass("active");
            element.stop().animate({ opacity: 0 }, 300);
        }
    });
    element.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 800);
    });
});
// *******
$(function () {
    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let $counter = $(entry.target);
                    $counter.prop("Counter", 0).animate(
                        {
                            Counter: $counter.data("count"),
                        },
                        {
                            duration: 2000,
                            easing: "swing",
                            step: function (now) {
                                $counter.text(Math.ceil(now));
                            },
                        }
                    );
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    $(".js-count").each(function () {
        observer.observe(this);
    });
});
$(function () {
    var href = window.location.href;
    $('.accent-menu li a').each(function (e, i) {
        $(this).removeClass("active");
        if (href.indexOf($(this).attr('href')) >= 0) {
            $('li a.active').removeClass("active");
            $(this).addClass("active");
        }
    });
});
// *******

$(document).ready(function () {
    $('.acc_hdr').first().addClass('active');
    $('.acc_body').first().addClass('active');
    $('.acc_hdr').first().find(".fa_icon").addClass('fa-minus').removeClass('fa-plus');

    $('.acc_hdr').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
            $(this).next('.acc_body').removeClass('active');
            $(this).find(".fa_icon").removeClass('fa-minus').addClass("fa-plus");
        } else {
            $(this).addClass('active');
            $(this).next('.acc_body').addClass('active');
            $(this).find(".fa_icon").addClass("fa-minus").removeClass('fa-plus');
        }
    });
});
