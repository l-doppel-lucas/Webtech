console.log('index.JS geladen');
let date = Date.now();

$('#modal').modal();

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

const cookieBanner = document.getElementById("cookie-banner");
const cookieAccepted = document.getElementById("accept-cookies");

const hideCookieBanner = () => cookieBanner.classList.add("hide");

cookieAccepted.addEventListener("click", () => {
    hideCookieBanner();
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")){
        cookieBanner.classList.remove("hide");
    }
}, 1000);
