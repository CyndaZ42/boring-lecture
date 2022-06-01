$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });

  $("button#light").click(function() {
    $("body").removeClass();
  });
});