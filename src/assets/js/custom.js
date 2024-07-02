import React from 'react'
import $ from 'jquery'; 


const custom = () => {
  return (
    <>
  (function($) {"{"}
  'use strict'; // Mean Menu $('.mean-menu').meanmenu({"{"}
  meanScreenWidth: "991"
  {"}"}); // Sticky, Go To Top JS $(window).on('scroll', function() {"{"}
  // Header Sticky JS if ($(this).scrollTop() &gt;150){"{"}
  $('.navbar-area').addClass("is-sticky");
  {"}"}
  else{"{"}
  $('.navbar-area').removeClass("is-sticky");
  {"}"};{"}"}); // ScrollCue scrollCue.init(); // Others Option For Responsive
  JS $(".others-option-for-responsive .dot-menu").on("click", function(){"{"}
  $(".others-option-for-responsive .container
  .container").toggleClass("active");
  {"}"}); // Input Plus &amp; Minus Number JS
  $('.input-counter').each(function() {"{"}
  var spinner = jQuery(this), input = spinner.find('input[type="text"]'), btnUp
  = spinner.find('.plus-btn'), btnDown = spinner.find('.minus-btn'), min =
  input.attr('min'), max = input.attr('max'); btnUp.on('click', function() {"{"}
  var oldValue = parseFloat(input.val()); if (oldValue &gt;= max) {"{"}
  var newVal = oldValue;
  {"}"} else {"{"}
  var newVal = oldValue + 1;
  {"}"}
  spinner.find("input").val(newVal); spinner.find("input").trigger("change");
  {"}"}); btnDown.on('click', function() {"{"}
  var oldValue = parseFloat(input.val()); if (oldValue &lt;= min) {"{"}
  var newVal = oldValue;
  {"}"} else {"{"}
  var newVal = oldValue - 1;
  {"}"}
  spinner.find("input").val(newVal); spinner.find("input").trigger("change");
  {"}"});
  {"}"}); // Input Plus &amp; Minus Number JS 2
  $('.input-counter').each(function() {"{"}
  var spinner = jQuery(this), input = spinner.find('input[type="text"]'), btnUp
  = spinner.find('.down'), btnDown = spinner.find('.up'), min =
  input.attr('min'), max = input.attr('max'); btnUp.on('click', function() {"{"}
  var oldValue = parseFloat(input.val()); if (oldValue &gt;= max) {"{"}
  var newVal = oldValue;
  {"}"} else {"{"}
  var newVal = oldValue + 1;
  {"}"}
  spinner.find("input").val(newVal); spinner.find("input").trigger("change");
  {"}"}); btnDown.on('click', function() {"{"}
  var oldValue = parseFloat(input.val()); if (oldValue &lt;= min) {"{"}
  var newVal = oldValue;
  {"}"} else {"{"}
  var newVal = oldValue - 1;
  {"}"}
  spinner.find("input").val(newVal); spinner.find("input").trigger("change");
  {"}"});
  {"}"}); // Tabs JS const tabs =
  document.querySelectorAll("[data-tab-target]"); const tabContents =
  document.querySelectorAll(".tab-content"); tabs.forEach((tab) =&gt; {"{"}
  tab.addEventListener("click", () =&gt; {"{"}
  tabs.forEach((tab) =&gt; {"{"}
  tab.classList.remove("active");
  {"}"}); tab.classList.add("active"); tabContents.forEach((tabContent) =&gt;{" "}
  {"{"}
  tabContent.classList.remove("active");
  {"}"}); const target = document.querySelector(tab.dataset.tabTarget);
  target.classList.add("active");
  {"}"});
  {"}"}); // Partner JS $(".partner-slider").owlCarousel({"{"}
  dots: false, loop: true, margin: 15, autoplay: true, autoplayTimeout: 2000,
  nav: true, responsive:{"{"}
  0:{"{"}
  items:2,
  {"}"}, 768:{"{"}
  items:3,
  {"}"}, 992:{"{"}
  items:4,
  {"}"}, 1200:{"{"}
  items:5,
  {"}"}
  {"}"}
  {"}"}) // Testimonial JS $(".testimonial-slider").owlCarousel({"{"}
  dots: true, loop: true, margin: 25, autoplay: true, autoplayTimeout: 2000,
  nav: false, responsive:{"{"}
  0:{"{"}
  items:1,
  {"}"}, 768:{"{"}
  items:1,
  {"}"}, 992:{"{"}
  items:1,
  {"}"}, 1200:{"{"}
  items:1,
  {"}"}
  {"}"}
  {"}"}) // products JS $(".sigma").owlCarousel({"{"}
  dots: true, loop: true, margin: 25, autoplay: true, autoplayTimeout: 2000,
  nav: true, responsive:{"{"}
  0:{"{"}
  items:1,
  {"}"}, 768:{"{"}
  items:1,
  {"}"}, 992:{"{"}
  items:1,
  {"}"}, 1200:{"{"}
  items:1,
  {"}"}
  {"}"}
  {"}"}) // Back to Top JS $(window).on('scroll', function(){"{"}
  var scrolled = $(window).scrollTop(); if (scrolled &gt; 300)
  $('.go-top').addClass('active'); if (scrolled &lt; 300)
  $('.go-top').removeClass('active');
  {"}"}); // Click Event JS $('.go-top').on('click', function() {"{"}
  $("html, body").animate({"{"} scrollTop: "0" {"}"}, 500);
  {"}"}); // Popup JS $(document).ready(function() {"{"}
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({"{"}
  disableOn: 700, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160,
  preloader: false, fixedContentPos: false
  {"}"});
  {"}"});
  {"}"})(jQuery); (function() {"{"}
  "use strict"; window.onload = function(){"{"}
  // Counter Js if ("IntersectionObserver" in window) {"{"}
  let counterObserver = new IntersectionObserver(function (entries, observer){" "}
  {"{"}
  entries.forEach(function (entry) {"{"}
  if (entry.isIntersecting) {"{"}
  let counter = entry.target; let target = parseInt(counter.innerText); let step
  = target / 200; let current = 0; let timer = setInterval(function () {"{"}
  current += step; counter.innerText = Math.floor(current); if
  (parseInt(counter.innerText) &gt;= target) {"{"}
  clearInterval(timer);
  {"}"}
  {"}"}, 10); counterObserver.unobserve(counter);
  {"}"}
  {"}"});
  {"}"}); let counters = document.querySelectorAll(".counter");
  counters.forEach(function (counter) {"{"}
  counterObserver.observe(counter);
  {"}"});
  {"}"}
  // Projects Js var getslide = $('.main-box li').length - 1; var slidecal =
  100/getslide+'%'; $('.box').css({"{"}"width": slidecal{"}"});
  $('.box').hover(function(){"{"}
  $('.box').removeClass('active'); $(this).addClass('active');
  {"}"});
  {"}"};{"}"})(); /*----------------------a tag Id Sroll
  topoffset-------------------------------*/ jQuery(document).ready(function ($)
  {"{"}
  $('.head_meniU_list li a[href*="#"]').off( "click touchstart");
  $('.head_meniU_list li a[href*="#"]').on('touchend click', function(e) {"{"}
  href = $(this).attr('href'); notComments = href.indexOf('#comments') === -1;
  if ( href !== '#' &amp;&amp; notComments ) {"{"}
  var theId = href.split('#').pop(); var $el = $('#' + theId); if ( $el.length
  &gt; 0 ) {"{"}
  e.preventDefault(); $('html, body').animate({"{"}
  scrollTop: $($el).offset().top -70
  {"}"}, 500); return false;
  {"}"}
  {"}"}
  {"}"});
  {"}"}); /*----------------------a tag Id Sroll
  topoffset-------------------------------*/
</>

  )
}

export default custom