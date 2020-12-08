$(document).ready(function(){
    $(".tips-toggler-li").click(function(){
        elemId = $(this).attr('id');
        splittedElemId = elemId.split('-');
        id = splittedElemId[splittedElemId.length - 1];
        console.log(id)
        contentHolderElemId = "tips-content-" + id;
        $("#" + contentHolderElemId).slideToggle();
        $("#tips-toggler-btn-" + id).children().toggleClass("active");
    });
});