$(function() {
    $('.slider__inner').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slick-prev slick-arrow"><img src="images/prev.svg" alt="prev arrow" /></button>',
        nextArrow: '<button class="slick-next slick-arrow"><img src="images/next.svg" alt="next arrow" /></button>',
        asNavFor: '.slider__items-mini'

    });
    $('.slider__items-mini').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: false,
        arrows: false,
        // centerMode: true,
        focusOnSelect: true
    });
    $(".movie__item-star").rateYo({
        rating: 1,
        starWidth: "12px",
        readOnly: true,
        ratedFill: "#E74C3C"
    });

    var mixer = mixitup('.movies__inner-box');
});