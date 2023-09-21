$('.hero-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
    }
});
$('.trending-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    autoPlay: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        600: {
            items: 3
        },
        1300: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
});
$('.like-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    autoPlay: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        600: {
            items: 3
        },
        1300: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
});