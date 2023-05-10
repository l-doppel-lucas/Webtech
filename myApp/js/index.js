console.log('index.js loaded')

$("nav").load('./helper/nav.html', function(){
    $.getScript('./js/nav.js');
});

$("footer").load('./helper/footer.html', function(){
    $.getScript('./js/footer.js');
});

$("header").load('./helper/header.html', function(){
    $.getScript('./js/header.js');
});

$.getScript('./js/HOME.js');

$.getScript('./js/ABOUT.js');

$.getScript('./js/CONTACT.js');

let date = Date.now();

$.ajax({
    method:"GET",
            url: "./helper/HOME.html?" + date,
            dataType: "html",
            success: function(data){
                $("main").html(data);
            },
});