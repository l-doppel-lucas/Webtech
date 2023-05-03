$("li").on('click', function(){
    let page = $(this).attr('data-id');
    //console.log(page);
    $.ajax({
        method:"GET",
        url: "./helper/" + page + ".html",
        dataType: "html",
        success: function(data){
            $("main").html(data);
        },
    });
});