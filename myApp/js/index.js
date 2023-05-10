console.log('index.js loaded');
$("footer").load('./helper/footer.html');
$("header").load('./helper/header.html');

$("nav").load('./helper/nav.html', function(){
    $.getScript('./js/nav.js');
});


let date = Date.now();

$.ajax({
    method:"GET",
            url: "./helper/HOME.html?" + date,
            dataType: "html",
            success: function(data){
                $("main").html(data);
                $.getScript('./js/home.js');
            },
});