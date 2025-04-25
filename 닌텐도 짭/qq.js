$(document).ready(function () {
    $(".item").mouseover(function () {
      $(this).children(".subitem").stop().slideDown(400);
    });
    $(".item").mouseleave(function () {
      $(this).children(".subitem").stop().slideUp(400);
    });
  });