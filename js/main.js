
var btn_popup = document.querySelector(".btn-popup");
var popup = document.querySelector(".write-us");
var exit = document.querySelector(".exit");

  btn_popup.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-show");
  });

  exit.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
  });

  // ================================================

var map_img = document.querySelector(".map-img");
var map_wide_img = document.querySelector(".map-wide-img");
var map_exit = document.querySelector(".map-exit");

  map_img.addEventListener("click", function(event) {
  event.preventDefault();
  map_wide_img.classList.add("popup-show");
  });

  map_exit.addEventListener("click", function(event) {
  event.preventDefault();
  map_wide_img.classList.remove("popup-show");
  });

  // =================================================

var buy = document.querySelector(".buy");
var confirm = document.querySelector(".item-confirm-block");
var exit_confirm = document.querySelector(".exit-confirm");

  buy.addEventListener("click", function(event) {
  event.preventDefault();
  confirm.classList.add("popup-show");
  });

  exit_confirm.addEventListener("click", function(event) {
  event.preventDefault();
  confirm.classList.remove("popup-show");
  });

  // ==================================================


  $(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
