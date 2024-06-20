// document.addEventListener("DOMContentLoaded", yall);
//AOS
AOS.init();

// Get the header
// var header = document.getElementById("header");
// var body = document.body;

// if (header) {
//   // Get the offset position of the navbar
//   var sticky = header.offsetTop;

//   // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//   function updateStickyHeader() {
//     if (window.pageYOffset > sticky) {
//       body.classList.add("sticky");
//     } else {
//       body.classList.remove("sticky");
//     }
//     // updateLogoImage();
//   }

//   // Use an event listener instead of onscroll property
//   window.addEventListener("scroll", function () {
//     // Use requestAnimationFrame for performance
//     window.requestAnimationFrame(updateStickyHeader);
//   });
// }

//
//new WOW().init();
$(document).ready(function () {
  $("#dropupMenuButton").on("click", function () {
    var icon = $(this).find("i");
    if (icon.hasClass("fa-plus")) {
      icon.removeClass("fa-plus").addClass("fa-times");
      $(this).attr("aria-haspopup", "true");
    } else {
      icon.removeClass("fa-times").addClass("fa-plus");
      $(this).attr("aria-haspopup", "false");
    }
  });
});
/////////////////////////////////////

///////////////////////////////////
$(function () {
  // Header
  $("#header").load("header.html", function () {
    // ScrollAnchor
    // $('[data-scroll]').on('click',function (e) {
    //     e.preventDefault();
    //     var target = this.hash;
    //     var $target = $(target);

    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 900, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });

    // Active
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").each(function () {
      if (this.href === path) {
        $(this).addClass("active");
      }
    });
  });

  // Footer
  $("#footer").load("footer.html");

  // Main Slider
  if ($(".homeSlider").length > 0) {
    $(".homeSlider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplayDuration: 3000,
      arrows: false,
      lazyLoad: "ondemand",
      fade: true,
    });
  }

  // Aos Refresh
  AOS.refresh();

  // Brands Slider
  // if ($(".brandSlider").length > 0) {
  //   $(".brandSlider").slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     centerMode: true,
  //     variableWidth: true,
  //     dots: true,
  //     autoplay: true,
  //     autoplayDuration: 2000,
  //     arrows: true,
  //     lazyLoad: "ondemand",
  //     prevArrow:
  //       "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
  //     nextArrow:
  //       "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",

  //     responsive: [
  //       {
  //         breakpoint: 700,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   });
  // }

  // Features
  $.getJSON("data/features.json", function (features) {
    features.forEach(function (feature, index) {
      // Skip the first feature as it's already in the HTML
      // if(index === 0) return;

      var featureHtml = `
            <div class="col-md-3 col-sm-6 col-12">
                <div class="grid-item position-relative fBox">
                    <img alt="${feature.alt}" src="${feature.src}">
                    <p class="">${feature.text}</p>
                </div>
            </div>
        `;
      $("#featuresList").append(featureHtml);
    });
  });
});
