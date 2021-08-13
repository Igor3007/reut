import "./import/modules";
import "./import/components";
import 'jquery.inputmask/dist/jquery.inputmask.bundle';
import './import/jquery.fancybox.min';

import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";
import Swiper, {
  Pagination,
  Navigation,
  Thumbs,
  Autoplay,
} from 'swiper';

Swiper.use([Pagination, Navigation, Thumbs]);

import $ from 'jquery';
import fileData from './import/data';
import Vue from 'vue/dist/vue.common.dev';

svgPolyfill();

$(document).ready(function () {

  var app = new Vue({
    el: '#app',
    data: {
      params: fileData
    },
    created: function () {
      // `this` указывает на экземпляр vm
      console.log('hello vue js')
    }
  })

  //main slider====================================

  $(document).ready(function(){
    $('.burger').on('click', function(){
        $(this).toggleClass('open')
        $('.header__nav nav').toggleClass('open')
        $('header').toggleClass('open')

        // var innerHeaderHeight = $('header').innerHeight()

        // $('.mobile-menu').toggleClass('open').css({
        //     'top': innerHeaderHeight+'px'
        // })

        $('html').toggleClass('hidden')
    });


    //закрыть при клике вне

    $(document).on('click', function (e) {
        var div = $(".burger, .header__nav nav");  //класс элемента вне которого клик
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            //закрыть popup
            if($('.burger').hasClass('open')){
                $('.burger').trigger('click')
            }
            
        }
    });

   
})

  //main slider====================================

  var mainSlider = new Swiper('[data-swiper="main-slider"]', {
    pagination: {
      el: '[data-swiper-dots="main-slider"]',
      type: 'bullets',
      clickable: true
    }
  });

  //gallery ======================================

  function updateFraction (elem){
    console.log(elem)

    document.querySelector('.gallery-view__caption-desc span.active').classList.remove('active')
    document.querySelectorAll('.gallery-view__caption-desc span')[elem.activeIndex].classList.add('active')

    // var offset = $('.gallery-view__swiper').offset().top
    // $(window).scrollTop(offset)

  }

  var galleryThumb = new Swiper('[data-swiper="gallery-thumb"]', {
    spaceBetween: 0,
    slidesPerView: 6.5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2.5,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3.2,
      },
      // when window width is >= 640px
      940: {
        slidesPerView: 6.5,
      }
    }
  });

  var galleryFull = new Swiper('[data-swiper="gallery"]', {
    spaceBetween: 0,
    navigation: {
      nextEl: '[data-swiper-next="gallery"]',
      prevEl: '[data-swiper-prev="gallery"]',
    },
    thumbs: {
      swiper: galleryThumb,
    },
    on: {
      init() {
        setTimeout(updateFraction, 0, this);
      },
      slideChange(event) {
        updateFraction(this);
      },
       
    },
  });


  // плавный скролл ======================================
    
var $page = $('html, body');
$('.header__nav li a[href*="#"]').on('click', function() {

    $page.animate({
        scrollTop: ($($.attr(this, 'href')).offset().top)  
    }, 400);
    $('.burger').trigger('click')
    return false;
});
$('a[href*="#"]').on('click', function() {

    $page.animate({
        scrollTop: ($($.attr(this, 'href')).offset().top)  
    }, 400);
    return false;
});

});