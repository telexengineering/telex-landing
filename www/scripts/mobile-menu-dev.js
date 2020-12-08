$(document).ready(function(){
    $("#mobile-menu").click(function(){
        $("#mobile-menu").toggleClass("active");
        $("#mobile-navbar").slideToggle();
        $("body").toggleClass("navbar-open");
      });
});