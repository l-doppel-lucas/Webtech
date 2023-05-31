console.log('LISTE.JS geladen');

//Template form.hbs laden
$.get('templates/form.hbs', function(template){
    console.log(template);

    //handlebars Template Kompilieren
    let compiledTemplate = Handlebars.compile(template);
    $.getJSON("db/data.json", function(response){
        console.log(response);

        //Daten in Template einfügeb
        let html = compiledTemplate(response);

        //HTML in Seite einfügen
        $('#tableData').html(html);

        $(".edit").on('click', function () {
            let id = $(this).parent().parent().attr('data-id');
            console.log('edit: ' + id);
            console.log('Modal open and edit: ' + id);
        
            $('#modal').modal('open');
            $('#modal>div').load('sites/formular.html', function() {
                $.get("js/formular.js");
                $('#Title').html('Eintrag mit der ID: ' + id + ' editieren')
            });
        });

        $(".status").on('click', function () {
            let id = $(this).parent().parent().attr('data-id');
            console.log('Status: ' + id);
            console.log('Modal open and edit Status: ' + id);
        
            $('#modal').modal('open');
            $('#modal>div').load('sites/formular.html', function() {
                $.get("js/formular.js");
                $('#Title').html('Status des Eintrags mit der ID: ' + id + ' editieren')
            });
        });
        
        $(".delete").on('click', function () {
            let id = $(this).parent().parent().attr('data-id');
            console.log('delete: ' + id);
        });

        // Suchfunktion
        $("#search").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#myTable tbody tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });

        // Liste der Autos sortieren wenn auf die Spaltenüberschriften geklickt wird
        // https://github.com/Mottie/tablesorter?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
        // Sortieren
        $("#myTable").tablesorter();

        $('button').hover(function () {
            // over
            $(this).addClass('pointer');
        
        }, function () {
            // out
            $(this).removeClass('pointer');
        }
        );
        
        
        $('tbody tr').hover(function () {
            // over
            $(this).addClass('grey cell');
        
        }, function () {
            // out
            $(this).removeClass('grey cell');
        }
        );

    });

});

$("#add").on('click', function () {
    console.log('add');
    console.log('Modal open and add');

    $('#modal').modal('open');
    $('#modal>div').load('sites/formular.html', function() {
        $.get("js/formular.js");
        $('#Title').html('Eintrag hinzufügen')
    });
});


