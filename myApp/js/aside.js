console.log('aside.JS geladen');
$("li").on('click', function () {
    let date = Date.now();
    let page = $(this).text();
    $.ajax({
        method: "GET",
        url: "sites/" + page + ".html?" + date,
        dataType: "html",
        success: function (data) {
            $(".main").html(data);
            $.getScript('./js/' + page + '.js?' + date);
        },
    });
});

