var navBarVisible = false;
var dropDownVisible = false;
$(document).ready(function(){
    // // start of blurry navbar script
    // if ($(".mobile-screen").css("font-size") == "1px" ){
    //     var pageContent = document.getElementById("content"),
    //     pagecopy = pageContent.cloneNode(true),
    //     blurryContent = document.getElementById("blurryscroll");
    //     blurryContent.appendChild(pagecopy);
    //     $(window).scroll(function(){
    //         blurryContent.scrollTop = window.pageYOffset; 
    //     });
    // }
    // // end of blurry navbar script

    $(".navbar-toggler").click(function(){
        if (!navBarVisible) {
        $(".nav-shadow").fadeIn(500);
        navBarVisible = true;
        } else {
        $(".nav-shadow").fadeOut(500);
        navBarVisible = false;
        }
    });

    $("#navbarDropdown").click(function(event){
        if (!dropDownVisible) {
        $(".dropdown-menu").fadeIn(500);
        dropDownVisible = true;
        } else {
        $(".dropdown-menu").fadeOut(500);
        dropDownVisible = false;
        }

        event.stopPropagation();
        $("body").not(".dropdown-menu").click(function(){
            $(".dropdown-menu").fadeOut(500);
            dropDownVisible = false;
        });
    });

});