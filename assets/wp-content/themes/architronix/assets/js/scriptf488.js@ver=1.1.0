
(function ($) {
  "use strict";

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };




  $(window).on("load", function () {
    $(".preloader").delay(600).fadeOut("slow");
  });



  // =======CounterUp JS-Odometer========>>>>>   
  if ($('.odometer').length > 0) {
    $(window).on('scroll', function () {
      let preloaderTimeout = 2500;
      function winScrollPosition() {
        var scrollPos = $(window).scrollTop(),
          winHeight = $(window).height();
        var scrollPosition = Math.round(scrollPos + (winHeight / .07));
        return scrollPosition;
      }
      var elemOffset = $('.odometer').offset().top;
      if (elemOffset < winScrollPosition()) {

        setTimeout(function () {
          $('.odometer').each(function () {
            $(this).html($(this).data('count-to'));
          });
        }, preloaderTimeout + 200);
      }
    });
  }
  // =======CounterUp JS-Odometer========>>>>>


  // =======Swiper .service-swiper========>>>>>
  if ($('.service-swiper').length > 0) {
    new Swiper(".service-swiper", {
      loop: true,      
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        460: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1320: {
          slidesPerView: 4,
        }
      },
      pagination: {
        el: ".service-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".service-progress-button-next",
        prevEl: ".service-progress-button-prev",
      },
    });
  }
  // =======Swiper .service-swiper========>>>>>



  // =======Swiper .shop-2-swiper========>>>>>
  if ($('.shop-2-swiper').length > 0) {
    new Swiper(".shop-2-swiper", {
      loop: true,      
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".shop-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }

  if ($('.shop-swiper').length > 0) {
    new Swiper(".shop-swiper", {
      loop: true,      
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1365: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      },

      pagination: {
        el: ".shop-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".shop-progress-button-next",
        prevEl: ".shop-progress-button-prev",
      },
    });
  }
  // =======Swiper .shop-swiper========>>>>>


  // =======Swiper .blog-swiper========>>>>>
  if ($('.blog-swiper').length > 0) {
    new Swiper(".blog-swiper", {
      loop: true,      
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        380: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      },
      pagination: {
        el: ".blog-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".blog-progress-button-next",
        prevEl: ".blog-progress-button-prev",
      },
    });
  }
  // =======Swiper .blog-swiper========>>>>>


  // =======Swiper .testimonial-swiper========>>>>>
  if ($('.testimonial-swiper').length > 0) {
    new Swiper(".testimonial-swiper", {
      loop: true,      
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },

      pagination: {
        el: ".testimonial-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".testimonial-progress-button-next",
        prevEl: ".testimonial-progress-button-prev",
      },
    });
  }
  // =======Swiper .testimonial-swiper========>>>>>



  // =======Swiper .project-swiper========>>>>>
  if ($('.project-gallery-swiper').length > 0) {
    new Swiper(".project-gallery-swiper", {
      loop: false,
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },

      pagination: {
        el: ".project-swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".progress-button-next",
        prevEl: ".progress-button-prev",
      },
    });
  }
  // =======Swiper .project-swiper========>>>>>



  // =======Swiper .project-swiper========>>>>>
  if ($('.contact-swiper').length > 0) {
    new Swiper(".contact-swiper", {
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },

      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  }
  // =======Swiper .project-swiper========>>>>>



  // =======Swiper .gallery-swiper========>>>>>
  if ($('.gallerySwiper').length > 0) {
    var swiper = new Swiper(".gallerySwiper", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        750: {
          spaceBetween: 20,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
    });
  }
  if ($('.gallerySwiper2').length > 0) {
    var swiper2 = new Swiper(".gallerySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".project-gallery-button-next",
        prevEl: ".project-gallery-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }
  // =======Swiper .gallery-swiper========>>>>>



  // =======Swiper .team-swiper========>>>>>
  if ($('.team-swiper').length > 0) {
    new Swiper(".team-swiper", {
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        380: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        }
      },
    });
  }
  // =======Swiper .team-swiper========>>>>>


  // =======Swiper .project-swiper========>>>>>
  if ($('.project-swiper').length > 0) {
    new Swiper(".project-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 2000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".project-next-btn",
        prevEl: ".project-prev-btn",
      },
    });
  }
  // =======Swiper .project-swiper========>>>>>



  // =======Magnific-PopUp========>>>>>    
  $('.image-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find('img');
      }
    }
  });

  // Video popup
  $('.video-popup-link').magnificPopup({
    disableOn: 200,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  // =======Magnific-PopUp========>>>>>


  // =======Gallery Animation onClick========>>>>>
  // $('.gallery-contents').on('click', function () {
  //   $('.gallery-contents').removeClass('gallery-expand').addClass('gallery-sm');
  //   $(this).removeClass('gallery-sm').addClass('gallery-expand');
  // })
  $('.gallery-contents').on('click mouseenter mouseleave', function (event) {
    if (event.type === 'click' || event.type === 'mouseenter') {
      $('.gallery-contents').removeClass('gallery-expand').addClass('gallery-sm');
      $(this).removeClass('gallery-sm').addClass('gallery-expand');
    } else if (event.type === 'mouseleave') {
      $(this).removeClass('gallery-expand').addClass('gallery-sm');
    }
  });
  // =======Gallery Animation onClick========>>>>>


  // =========Button(Increse-Decrese)=========>>>>>
  // Function to update the input value
  function architronixUpdateInputValue(input, increment) {
      var currentValue = parseFloat(input.value);
      var step = input.hasAttribute('step') ? parseFloat(input.getAttribute('step')) : 1;
      var newValue = currentValue + (increment * step);

      // Ensure newValue is not less than the minimum value (if min attribute is set)
      if (input.hasAttribute('min')) {
          var minValue = parseFloat(input.getAttribute('min'));
          if (newValue < minValue) {
              newValue = minValue;
          }
      }

      // Ensure newValue is not greater than the maximum value (if max attribute is set and not empty)
      if (input.hasAttribute('max') && input.getAttribute('max') !== "") {
          var maxValue = parseFloat(input.getAttribute('max'));
          if (newValue > maxValue) {
              newValue = maxValue;
          }
      }

      input.value = newValue;
  }

  // Event listener for plus-icon
  document.querySelectorAll('.plus-icon').forEach(function(plusIcon) {
      plusIcon.addEventListener('click', function() {
          var input = this.closest('.cart-btn').querySelector('.input-number');
          architronixUpdateInputValue(input, 1);
      });
  });

  // Event listener for dash-icon
  document.querySelectorAll('.dash-icon').forEach(function(dashIcon) {
      dashIcon.addEventListener('click', function() {
          var input = this.closest('.cart-btn').querySelector('.input-number');
          architronixUpdateInputValue(input, -1);
      });
  });
  
  // =========Button(Increse-Decrese)=========>>>>>



  // =========Leaflet map=========>>>>>


  if ($('#map').length > 0) {
    var map = L.map('map').setView([35.76428892315803, -40.45770338684278], 3);
    var locationsArray = [];
  
    function clickZoom(e) {
      map.setView(e.target.getLatLng(), 16);
    }
  
    $.each(architronixLocations, function(index, location) {
      // Create Marker
      var marker = L.marker(location.markerPoint, {
        title: location.title,
        className: "marker-usa"  // Class for the marker
      }).addTo(map);
  
      // Bind Popup
      marker.bindPopup(`<div class="card card-map architronix-map-card"><div class="card-body">
                          <h5 class="card-title service-title">${location.title}</h5><p class="mb-0 fw-semibold">${location.subtitle}</p><p class="mb-0 contact-home">${location.address}</p>                          
                        </div></div>`).on('click', clickZoom);
  
      // Store the location in the array
      locationsArray.push({ marker: marker, location: location });
    });
  

    
     // Handle external link clicks
    $('.btn-map-direction').on('click', function(e) {
      e.preventDefault();
      var markerTitle = $(this).data('title');
      
      // Find the marker in the array based on the title
      var selectedMarker = locationsArray.find(function(item) {
        return item.location.title === markerTitle;
      });

      // Open the popup for the selected marker
      if (selectedMarker) {
        selectedMarker.marker.openPopup();
        // Set the zoom level to 16
        map.setView(selectedMarker.marker.getLatLng(), 12);
      }
    });
  
    L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
      maxZoom: 26,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    // Outside click event
    $(document).on('click', function(e) {
      var mapContainer = $('#map');
      var isClickInsideMap = mapContainer.has(e.target).length > 0 || mapContainer.is(e.target); 
     
    });
  }
  // =========Leaflet map=========>>>>>






  // ========= Stroke-animation When visible on view-port=========>>>>>
  if ($('.stroke-heading').length > 0){
   
      function isInViewport(element) {
          var elementTop = $(element).offset().top;
          var elementBottom = elementTop + $(element).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          return elementBottom > viewportTop && elementTop < viewportBottom;
      }
      function handleVisibility() {
          $(".stroke-heading , .stroke-heading-2").each(function (i, listItem) {
              if (isInViewport(listItem)) {
                  $(listItem).find('.text-line-2').addClass('text-line-animation');
              } else {
                  $(listItem).find('.text-line-2').removeClass('text-line-animation');
              }
          });
      }      
      handleVisibility();      
      $(window).on("scroll", handleVisibility);
  
  }    
  // ========= Stroke-animation When visible on view-port=========>>>>>



  // ========= Team-Wrapper hover=========>>>>>
  if ($('.team-wrapper').length > 0){
      
        $(".team-wrapper").on('hover',
            function () {
                $(this).find('.author-name').addClass('author-border-bottom');
            },
            function () {
                $(this).find('.author-name').removeClass('author-border-bottom');
            }
        );
    
  }
  // ========= Team-Wrapper hover=========>>>>>
  


//===============smooth scrolling ===================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 2,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})



function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// =================  typed text =============

if ($('.typed-text').length > 0){
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop: true,
    typeSpeed: 30,
    backSpeed: 10,
    backDelay: 1500,
    cursorChar: '_'
  });
}


new WOW().init();




  // =================  Back-To-Top =============
  if ($('.progressCounter').length > 0){
    $(".progressCounter").progressScroll();
    $(".progressCounter").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(document).ready(function() {
      var progressElements = $('.progressScroll');
      $(window).scroll(function() {
          // Check if the scroll position is greater than or equal to 50px
          if ($(this).scrollTop() >= 50) {
              // Add class 'progress-scroll-opacity-1' with smooth fadeIn animation
              progressElements.addClass('progress-scroll-opacity-1');
          } else {
              // Remove class 'progress-scroll-opacity-1' with smooth fadeOut animation
              progressElements.removeClass('progress-scroll-opacity-1');
          }
      });
    });
  }
  // =================  Back-To-Top =============


  // =================  Coustomizer closing =============
  if ($('[data-toggle="tooltip"]').length > 0){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({delay: { "show": 300, "hide": 300 }})
    })
  }
  // =================  Coustomizer closing =============
  

   //GSAP scrollTrigger
   gsap.registerPlugin(ScrollTrigger);

   let animationRotate = document.querySelectorAll(".animation-rotate");
   animationRotate.forEach((animationRotate) => {
       gsap.to(animationRotate, {
           duration: 2,
           rotation: 360,
           ease: "linear",
           repeat: -1
       });
   });

   let scrollRotate = document.querySelectorAll(".scroll-rotate");
   scrollRotate.forEach((scrollRotate) => {
       gsap.to(scrollRotate, {
           scrollTrigger: {
               trigger: scrollRotate,
               scrub: 2
           },
           rotation: 720
       });
   });

   let scrollMoveRight = document.querySelectorAll(".scroll-move-right");
   scrollMoveRight.forEach((scrollMoveRight) => {
       gsap.to(scrollMoveRight, {
           x: 250,
           duration: 1.5,
           scrollTrigger: {
               trigger: scrollMoveRight,
               start: "top 75%",
               scrub: 2
           }
       });
   });

   let scrollMoveLeft = document.querySelectorAll(".scroll-move-left");
   scrollMoveLeft.forEach((scrollMoveLeft) => {
       gsap.to(scrollMoveLeft, {
           x: -500,
           duration: 1.5,
           scrollTrigger: {
               trigger: scrollMoveLeft,
               start: "top 30%",
               scrub: 2
           }
       });
   });

   let scrollMoveRight2 = document.querySelectorAll(".scroll-move-right2");
   scrollMoveRight2.forEach((scrollMoveRight2) => {
       gsap.to(scrollMoveRight2, {
           x: 800,
           duration: 1.5,
           scrollTrigger: {
               trigger: scrollMoveRight2,
               start: "top 100%",
               scrub: 2
           }
       });
   });

   let scrollMoveLeft2 = document.querySelectorAll(".scroll-move-left2");
   scrollMoveLeft2.forEach((scrollMoveLeft2) => {
       gsap.to(scrollMoveLeft2, {
           x: -400,
           duration: 1.5,
           scrollTrigger: {
               trigger: scrollMoveLeft2,
               start: "top 100%",
               scrub: 2
           }
       });
   });

   let scrollMoveUp = document.querySelectorAll(".scroll-move-up");
   scrollMoveUp.forEach((scrollMoveUp) => {
       gsap.to(scrollMoveUp, {
           y: -400,
           duration: 1.5,
           scrollTrigger: {
               trigger: scrollMoveUp,
               start: "top 20%",
               scrub: 2
           }
       });
   });

   let growUp = document.querySelectorAll(".grow-up");
   growUp.forEach((growUp) => {
       gsap.fromTo(
           growUp,
           {
               autoAlpha: 0.5,
               scale: 0.7
           },
           {
               autoAlpha: 1,
               duration: 2,
               scale: 1,
               scrollTrigger: {
                   trigger: growUp,
                   start: "top 90%"
               },
               stagger: 0.2
           }
       );
   });

   let scrollZoomIn = document.querySelectorAll(".scroll-zoom-in");
   scrollZoomIn.forEach((scrollZoomIn) => {
       gsap.to(scrollZoomIn, {
           scrollTrigger: {
               trigger: scrollZoomIn,
               start: "top 10%",
               scrub: 2
           },
           scale: 1.2
       });
   });

   let scrollZoomIn2 = document.querySelectorAll(".scroll-zoom-in-2");
   scrollZoomIn2.forEach((scrollZoomIn2) => {
       gsap.to(scrollZoomIn2, {
           scrollTrigger: {
               trigger: scrollZoomIn2,
               start: "top 90%",
               scrub: 2
           },
           scale: 1
       });
   });

   let scrollZoomOut = document.querySelectorAll(".scroll-zoom-out");
   scrollZoomOut.forEach((scrollZoomOut) => {
       gsap.to(scrollZoomOut, {
           scrollTrigger: {
               trigger: scrollZoomOut,
               start: "top 5%",
               scrub: 2
           },
           scale: 0.5
       });
   });

   $(".scoll-reduce-border-radius").each(function () {
       $(this).wrap('<div class="scoll-reduce-border-wraper"></div>');
   });

   let reduceBorderRadius = document.querySelectorAll(".scoll-reduce-border-wraper");

   reduceBorderRadius.forEach((reduceBorderRadius) => {
       gsap.to(reduceBorderRadius, {
           scrollTrigger: {
               trigger: reduceBorderRadius,
               start: "top 98%",
               end: "top 50%",
               duration: 0,
               scrub: 2
           },
           borderRadius: "0"
       });
   });

   let revealContainers = document.querySelectorAll(".reveal-img");
   revealContainers.forEach((revealContainers) => {
       let image = revealContainers.querySelector("img");
       let tl4 = gsap.timeline({
           scrollTrigger: {
               trigger: revealContainers,
               toggleActions: "restart none none reset"
           }
       });

       tl4.set(revealContainers, { autoAlpha: 1 });
       tl4.from(revealContainers, 1.5, {
           xPercent: -100,
           ease: Power2.out
       });
       tl4.from(image, 1.5, {
           xPercent: 100,
           scale: 1.3,
           delay: -1.5,
           ease: Power2.out
       });
   });

   $(document).on('click', '.woocommerce-product-thumbnail__wrapper a', function(){
      var mainImage = $('.woocommerce-product-main-image__wrapper img');
      var fullSizeimage = $(this).attr('href');
      var largSizeimage = $(this).find('img').data('large_image');
      var srcSet = $(this).find('img').attr('srcset');
      mainImage.attr('src', largSizeimage).data('large_image', fullSizeimage).attr('srcset', srcSet);
      return false;
    })
   

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
        document.querySelectorAll('.hover-menu .nav-item.dropdown').forEach(function (everyitem) {
            everyitem.addEventListener('mouseover', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');
                if (el_link !== null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    if (nextEl !== null && this.contains(nextEl)) {
                        nextEl.classList.add('show');
                    }
                }
            }.bind(everyitem)); // Explicitly bind the context to the current element
            everyitem.addEventListener('mouseleave', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');
                if (el_link !== null) {
                    let nextEl = el_link.nextElementSibling;
                    if (nextEl !== null && this.contains(nextEl)) {
                        el_link.classList.remove('show');
                        nextEl.classList.remove('show');
                    }
                }
            }.bind(everyitem)); // Explicitly bind the context to the current element
        });
    }
    // end if innerWidth 

   
    const navSelector = ".sticky-navbar";
    const navScrollClass = "sticky"; 
    
    if (document.querySelectorAll(navSelector).length > 0) {
      const navbarHeight = document.querySelector(navSelector).offsetHeight;
      const topbarHeight = document.querySelector('.fixed-top .topbar-section') ? document.querySelector('.fixed-top .topbar-section').offsetHeight : 0;
    
      window.addEventListener('scroll', function() {
        if (window.scrollY > navbarHeight + 30) {
          document.querySelector(navSelector).classList.add(navScrollClass);
          document.querySelector('body').classList.add('active-'+navScrollClass);
          document.querySelector(':root').style.setProperty('--architronix-header-height', navbarHeight + 'px');
          
         
            document.querySelector(navSelector).style.transform = `translateY(-${topbarHeight}px)`;
         
        } else {
          document.querySelector(navSelector).classList.remove(navScrollClass);
          document.querySelector('body').classList.remove('active-'+navScrollClass);
          document.querySelector(':root').style.setProperty('--architronix-header-height', '0');
          
          
            document.querySelector(navSelector).style.transform = 'translateY(0)';
         
        }
      });
    }

  
  

  });