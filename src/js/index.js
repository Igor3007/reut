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

  }

  var galleryThumb = new Swiper('[data-swiper="gallery-thumb"]', {
    spaceBetween: 0,
    slidesPerView: 6.5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
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

});