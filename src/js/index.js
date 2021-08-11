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

});