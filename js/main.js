$(document).ready(function(){
   mobSearch();
   loginOpen();
   headerMobMenu();
   navMenu();
   menuDropdown();
   submenuDropdown();
   submenuShow();
   theme();
   suggestShow();
   popupFeedback();
   upbtn();
});

function mobSearch() {
   $(".search-mob__btn").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-search')) {
            $parent.removeClass('mob-search');
         } else {
            $parent.addClass('mob-search');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".search-mob__btn, .header__search").length) {
         if ($(".header").hasClass("mob-search")) {
            $(".header").removeClass("mob-search");
         }
      }
   });
}

function loginOpen() {
   $(".login-block__btn").on('click', function () {
         var $parent = $(".login-block");
         if ($parent.hasClass('login-open')) {
            $parent.removeClass('login-open');
         } else {
            $parent.addClass('login-open');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".login-block__btn, .login-block").length) {
         if ($(".login-block").hasClass("login-open")) {
            $(".login-block").removeClass("login-open");
         }
      }
   });
}

function headerMobMenu() {
   $(".header__burger").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('header-menu')) {
            $parent.removeClass('header-menu');
         } else {
            $parent.addClass('header-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".header__burger, .header__menu-mob").length) {
         if ($(".header").hasClass("header-menu")) {
            $(".header").removeClass("header-menu");
         }
      }
   });
}

function theme() {
   $(".navigation__theme-btn, .header__theme").on('click', function () {
         var $parent = $("body");
         if ($parent.hasClass('dark-theme')) {
            $parent.removeClass('dark-theme');
         } else {
            $parent.addClass('dark-theme');
         }
   });
}

function navMenu() {
   $(".navigation__burger").on('click', function () {
         var $parent = $(".navigation");
         if ($parent.hasClass('nav-menu')) {
            $parent.removeClass('nav-menu');
         } else {
            $parent.addClass('nav-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".navigation__burger, .menu").length) {
         if ($(".navigation").hasClass("nav-menu")) {
            $(".navigation").removeClass("nav-menu");
         }
      }
   });
}

function menuDropdown() {
   $(".menu__dropdown .dropdown-link").on('click', function () {
         if ($(this).parent().hasClass('dropdown-open')) {
            $(this).parent().removeClass('dropdown-open');
         } else {
            $(".menu__dropdown").removeClass('dropdown-open');
            $(this).parent().addClass('dropdown-open');
         }
   });
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".dropdown-link, .menu__list").length) {
         if ($(".menu__dropdown").hasClass("dropdown-open")) {
            $(".menu__dropdown").removeClass("dropdown-open");
         }
      }
   });
}

function submenuDropdown() {
      $(".submenu__dropdown .dropdown-link").on('click', function () {
         if ($(this).parent().hasClass('dropdown-open')) {
            $(this).parent().removeClass('dropdown-open');
         } else {
            $(".submenu__dropdown").removeClass('dropdown-open');
            $(this).parent().addClass('dropdown-open');
         }
      }); 
      $(".wrapper").on('click', function(event) {
         if (!$(event.target).closest(".dropdown-link, .submenu__list").length) {
            if ($(".submenu__dropdown").hasClass("dropdown-open")) {
               $(".submenu__dropdown").removeClass("dropdown-open");
            }
         }
      });
}

function submenuShow() {
   $(".submenu-add").on('click', function () {
      $parent = $('.heading__submenu');
         if ($parent.hasClass('submenu-show')) {
            $parent.removeClass('submenu-show');
         } else {
            $parent.addClass('submenu-show');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".submenu-add").length) {
         if ($(".heading__submenu").hasClass("submenu-show")) {
            $(".heading__submenu").removeClass("submenu-show");
         }
      }
   });
}

function suggestShow() {
   $(".star__btn").on('click', function () {
         if ($(this).parent().hasClass('suggest-show')) {
            $(this).parent().removeClass('suggest-show');
         } else {
            $(this).parent().addClass('suggest-show');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".star__btn, .star__form").length) {
         if ($(".star__group").hasClass("suggest-show")) {
            $(".star__group").removeClass("suggest-show");
         }
      }
   });
}

function popupFeedback() {
   $('.popup-open').click(function() {
      $('.popup-fade').fadeIn();
      return false;
   });	
   
   $('.popup-close').click(function() {
      $(this).parents('.popup-fade').fadeOut();
      return false;
   });
   
   $('.popup-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0) {
         $(this).fadeOut();					
      }
   });
}

function upbtn() { 
   $(window).scroll(function() {     
      if ($(window).scrollTop() > 50) {
         $('.up-btn').addClass('show');
      }
      else {
         $('.up-btn').removeClass('show');
      }
   });
   $('.up-btn').on("click", function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('html, body, .wrapper').animate({scrollTop: top}, 500);
   });
}