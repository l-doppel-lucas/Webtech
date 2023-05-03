$(document).ready(function () {

    $('#test').on('click', function(){
        console.log('Dismami');
        $(this).html('geklickt');
        $(this).toggleClass('green');
    });


    $("#btn-1").on('click', function () {
        var txt = $('#element').text();
        console.log(txt);
    })

    $("#btn-2").on('click', function(){
        var txt = $("#element").html();
        console.log(txt);
    })
    
    $("#btn-3").on('click', function(){
        var txt = $("#inputtxt").val();
        console.log(txt);
    })
    
    $("#btn-4").on('click', function(){
        var txt = $("#element").attr("data-id");
        console.log(txt);
    })

    //Danach einfügen
    $("#element").after("<p>Text Nachher</p>");
    $("#element").append("<br>Das ist weiterer Text am Schluss<br>");


    //davor einfügen
    $("#element").prepend("<br>Das ist weiterer Text am Anfang<br>");
    $("#element").before("<br>noch ein Text vorher");

    $("#nav").load('http://localhost/WTA/_woche02/Promise/nav.html', function(){
        $('#test li').on('click', function(){
            console.log('click');
        })
    });

    //Json Holen und in Konsole ausgeben
    $.getJSON("generated.json", function(data){
        console.log(data);
    });

    //Json Holen mit AJAX
    $.ajax({
        type: 'GET',
        url: 'generated.json',
        dataType: 'json',
        success: function(data){
            console.log(data);
        },
        error: function(){
            console.log('Error')
        }
    });

});
