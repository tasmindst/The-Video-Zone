jQuery(document).ready(function($) {
    "use strict";
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    $(".pretty-gallery a[rel^='prettyPhoto']").prettyPhoto();
    if ($('.cp_header').length) {
        var stickyNavTop = $('#cp-main-content').offset().top;
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                $('.cp_header').addClass('cp_sticky');
            } else {
                $('.cp_header').removeClass('cp_sticky');
            }
        };
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }
    if ($('#cp_side-menu-btn, #cp-close-btn').length) {
        $('#cp_side-menu-btn, #cp-close-btn').on('click', function() {
            var $navigacia = $('body, #cp_side-menu'),
                val = $navigacia.css('left') === '300px' ? '0px' : '300px';
            $navigacia.animate({
                left: val
            }, 300)
        });
    }
    if ($('#featured-video').length) {
        $('#featured-video').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 4,
            autoplay: false,
            smartSpeed: 1500,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 4,
                }
            }
        });
    }
    if ($('#featured-video2').length) {
        $('#featured-video2').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 4,
            autoplay: false,
            smartSpeed: 1500,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 4,
                }
            }
        });
    }
    if ($('#lightgallery1').length) {
        $('#lightgallery1').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 4,
            autoplay: false,
            smartSpeed: 1500,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 4,
                }
            }
        });
    }
    if ($('#comedy-videos').length) {
        $('#comedy-videos').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 3,
            autoplay: false,
            smartSpeed: 1500,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 3,
                }
            }
        });
    }
    if ($('.today-videos').length) {
        $('.today-videos').bxSlider({
            pagerCustom: '#bx-pager'
        });
    }
    if ($('#cp_banner-slider').length) {
        $('#cp_banner-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
        });
    }
    if ($('#cp-video-slider').length) {
        $('#cp-video-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
        });
    }
    if ($('#cp_banner-slider2').length) {
        $('#cp_banner-slider2').owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            navText: 'fgfgfdg',
            items: 2,
            smartSpeed: 2000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 2,
                }
            }
        });
    }
    if ($('.cp_viewed-slider').length) {
        $('.cp_viewed-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: 'NEXT',
            items: 1,
            autoplay: true,
            smartSpeed: 1500,
        });
    }
    if ($('.cp_blog-slider').length) {
        $('.cp_blog-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            navText: 'fgfg',
            items: 1,
            autoplay: true,
            smartSpeed: 2000,
        });
    }
    if ($('#cp_product-slider').length) {
        $('#cp_product-slider').bxSlider({
            auto: true,
            pagerCustom: '#bx-pager',
            navigation: false,
        });
    }
    if ($('.cp_viewed-slider2').length) {
        $('.cp_viewed-slider2').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: 'fgfgf',
            items: 4,
            autoplay: false,
            smartSpeed: 1500,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 4,
                }
            }
        });
    }
    if ($('audio').length) {
        $('audio').audioPlayer();
    }
    if ($('.cp-off-countdown').length) {
        var austDay = new Date();
        austDay = new Date(2016, 3 - 1, 5, 3, 15)
        $('.cp-off-countdown').countdown({
            labels: ['Years', 'Months', 'Weeks', 'Days', 'Hors', 'Min', 'Sec'],
            until: austDay
        });
        $('#year').text(austDay.getFullYear());
    }
    if ($('.cp-coming-countdown').length) {
        var austDay = new Date();
        austDay = new Date(2016, 1 - 1, 5, 12, 15)
        $('.cp-coming-countdown').countdown({
            labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Min', 'Sec'],
            until: austDay
        });
        $('#year').text(austDay.getFullYear());
    }
    if ($('.spinnerExample').length) {
        $('.spinnerExample').spinner()
    }
    if ($('#cp-range-slider').length) {
        $("#cp-range-slider").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#cp-range-slider").slider("values", 0) + " - $" + $("#cp-range-slider").slider("values", 1));
    };
    if ($('#cp-map_contact').length) {
        var map;
        var myLatLng = new google.maps.LatLng(48.85661, 2.35222);
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -50,
                lightness: 10
            }],
        }
        map = new google.maps.Map(document.getElementById('cp-map_contact'), myOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
        });
        marker.getPosition();
    }
});