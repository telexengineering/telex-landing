$(document).ready(function(){
    $("#top-lang-menu").click(function(e){
        $("#nav-lang-dropdown-list").fadeToggle(250);
        
        e.stopPropagation();
        $("body").not("#nav-lang-dropdown-list").click(function(){
          $("#nav-lang-dropdown-list").fadeOut(250);
        });
    });
});
