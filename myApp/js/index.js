console.log('index.js loaded')

$("nav").load('./helper/nav.html', function(){
    $.getScript('./js/nav.js')
});

let date = Date.now();

$.ajax({
    method:"GET",
            url: "./helper/HOME.html?" + date,
            dataType: "html",
            success: function(data){
                $("main").html(data);
            },
})