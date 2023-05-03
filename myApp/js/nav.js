console.log('nav.js loaded')

$("li").on('click', function(){
    let page = $(this).attr('data-id');
    //console.log(page);
    let date = Date.now();
    $.ajax({
        method:"GET",
        url: "./helper/" + page + ".html?" + date,
        dataType: "html",
        success: function(data){
            $("main").html(data);
        },
    });
});