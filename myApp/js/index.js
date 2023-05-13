console.log('index.JS geladen');
let date = Date.now();

$(".header").load("sites/header.html?" + date);
$(".footer").load("sites/footer.html?" + date);


$(".aside").load("sites/aside.html?" + date, () => {
    $.getScript('./js/aside.js?' + date);
});


$.ajax({
    method: "GET",
    url: "sites/HOME.html?" + date,
    dataType: "html",
    success: function (data) {
        $(".main").html(data);
        $.getScript('./js/home.js?' + date);
    },
});