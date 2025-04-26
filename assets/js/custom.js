// Custom JS

/*
 * @author: Faisal Saeed
 */
$(document).ready(function () {
  $("#toggle").click(function () {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
    $("body").toggleClass("scroll-locked");
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 50) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });

  // swiper js for tasker carousel
  var swiper = new Swiper(".our-products", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    grabCursor: true,
    loop: false,
    navigation: {
      nextEl: ".products-button-next",
      prevEl: ".products-button-prev",
    },
  });

  var swiper = new Swiper(".latest-news", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    grabCursor: true,
    loop: false,
    navigation: {
      nextEl: ".latest-news-button-next",
      prevEl: ".latest-news-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1645: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".solar-projects", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    grabCursor: true,
    loop: false,
    navigation: {
      nextEl: ".solar-projects-button-next",
      prevEl: ".solar-projects-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1645: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".testimonials", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    autoHeight: true,
    centeredSlides: false,
    grabCursor: true,
    loop: false,

    navigation: {
      nextEl: ".testimonials-button-next",
      prevEl: ".testimonials-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1645: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".our__clients", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    autoHeight: false,
    centeredSlides: false,
    grabCursor: true,
    loop: false,

    navigation: {
      nextEl: ".clients-button-next",
      prevEl: ".clients-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1645: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".our__team", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    autoHeight: false,
    centeredSlides: false,
    grabCursor: true,
    loop: false,

    navigation: {
      nextEl: ".team-button-next",
      prevEl: ".team-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1645: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });
});
