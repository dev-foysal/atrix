let menu = document.querySelector('.header .menu');

document.querySelector('.mobile-menu-trigger').onclick = () => {
    menu.classList.add('active');
};

document.querySelector('.mobile-menu-close').onclick = () =>{
    menu.classList.remove('active');
 }


//search form
let searchForm = document.querySelector('.search-form');

document.querySelector('#icon-search').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

window.onscroll = () => {
  searchForm.classList.remove('active');
  menu.classList.remove('active');
}

//side bar
let sideBar = document.querySelector('.side-bar')

document.querySelector('#icon-square-dot').onclick = () =>{
  sideBar.classList.add('active');
}

document.querySelector('#close-side-bar').onclick = () =>{
  sideBar.classList.remove('active');
};

window.onload = () => {
  searchForm.classList.remove('active');
  sideBar.classList.remove('active');
}

 //home slider
var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".hsc-next",
      prevEl: ".hsc-prev",
  },
});

//Parallax Scene for Icons
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


if($('.parallax-scene-1').length){
  var scene = $('.parallax-scene-1').get(0);
  var parallaxInstance = new Parallax(scene);
}

//logo slider
var swiper = new Swiper(".logo-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

  // js counter 
$(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 1000,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString('en');
                                  $(this).text(now);
          },
        }
      );
});

//project slider
var swiper = new Swiper(".project-slider", {
    loop:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".project-next",
      prevEl: ".project-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

   //testimonial slider
 var swiper = new Swiper(".testimonial-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

  // scroll to top
  var btn = $('.button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });