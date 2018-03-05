$(document).ready(function(){

  $(".spot").on("click", function(e){
    e.preventDefault();


  var clicked_spot = $(this);
  var des = clicked_spot.data("des");

  $(".modal").find(".inner").find("p").text(des);
  $(".modal").addClass("active");
});

  $(".close").on("click", function (e){
    e.preventDefault();

  $(".modal").removeClass("active");
});

  });
