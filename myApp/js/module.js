console.log('module.JS geladen');

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
    getDatabase,
    ref,
    onValue,
    remove,
    update,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyDNU08M2rAjEg4M5IlXfmuOWtx-1SIHw0E",
    authDomain: "myapp-90a56.firebaseapp.com",
    databaseURL: "https://myapp-90a56-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myapp-90a56",
    storageBucket: "myapp-90a56.appspot.com",
    messagingSenderId: "875652491492",
    appId: "1:875652491492:web:8827dca389e8251d0de4f1"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const starCountRef = ref(db, '/');



onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);

    $.get('templates/form.hbs', function(template){
        var hbtemplate = Handlebars.compile(template);
        
        //Daten in Template einfügeb
        let html = hbtemplate(data);

        //HTML in Seite einfügen
        $('#tableData').html(html);

            $(".edit").on('click', function () {
                let id = $(this).parent().parent().attr('data-id');
                console.log('edit: ' + id);
                console.log('Modal open and edit: ' + id);
            
                $('#modal').modal('open');
                $('#modal>div').load('sites/formular.html', function() {
                    //$.get("js/formular.js");
                    $('#Title').html('Eintrag mit der ID: ' + id + ' editieren');

                    let enddate = data.data[id].enddate;
                    var endparts = enddate.split('.');
                    var myenddate = new Date(endparts[2], endparts[1] -1, endparts[0]);
                    $('#enddate').val(myenddate);
                    console.log(myenddate);
                    $('#enddate').datepicker({
                        format: 'dd.mm.yyyy',
                        setDefaultDate: true,
                        firstDay: 1,    
                        i18n: {
                            labelMonthNext: 'Nexter Monat',
                            labelMonthPrev: 'Vorheriger Monat',
                            labelMonthSelect: 'Monat wählen',
                            labelYearSelect: 'Jahr wählen',
                            months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                            monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                            monthsLong: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                            weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
                            weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                            weekdaysAbbrev: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
                            today: 'Heute',
                            close: 'schliessen',
                            cancel: 'abbrechen',
                            clear: 'löschen',
                            done: 'wählen'
                        },
                    });

                    let startdate = data.data[id].startdate;
                    var startparts = startdate.split('.');
                    var mystartdate = new Date(startparts[2], startparts[1] -1, startparts[0]);
                    $('#startdate').val(mystartdate);
                    $('#startdate').datepicker({
                        format: 'dd.mm.yyyy',
                        setDefaultDate: true,
                        firstDay: 1,    
                        i18n: {
                            labelMonthNext: 'Nexter Monat',
                            labelMonthPrev: 'Vorheriger Monat',
                            labelMonthSelect: 'Monat wählen',
                            labelYearSelect: 'Jahr wählen',
                            months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                            monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                            monthsLong: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                            weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
                            weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                            weekdaysAbbrev: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
                            today: 'Heute',
                            close: 'schliessen',
                            cancel: 'abbrechen',
                            clear: 'löschen',
                            done: 'wählen'
                        },
                    });

                    $('#fach').val(data.data[id].fach);
                    $('#aufgaben').val(data.data[id].aufgaben);
                    $('#status').val(data.data[id].status);

                    M.updateTextFields();
                    $('#enddate').addClass('valid');
                    $('#startdate').addClass('valid');
                    $('#aufgaben').addClass('valid');
                });
            });
    
            $(".status").on('click', function () {
                let id = $(this).parent().parent().attr('data-id');
                console.log('Status: ' + id);
                console.log('Modal open and edit Status: ' + id);
            
                $('#modal').modal('open');
                $('#modal>div').load('sites/formular.html', function() {
                    //$.get("js/formular.js");
                    $('#Title').html('Status des Eintrags mit der ID: ' + id + ' editieren')

                    let enddate = data.data[id].enddate;
                    var endparts = enddate.split('.');
                    var myenddate = new Date(endparts[2], endparts[1] -1, endparts[0]);
                    $('#enddate').val(myenddate);
                    console.log(myenddate);
                    $('#enddate').datepicker({
                        format: 'dd.mm.yyyy',
                        setDefaultDate: true,
                        firstDay: 1,    
                        i18n: {
                            labelMonthNext: 'Nexter Monat',
                            labelMonthPrev: 'Vorheriger Monat',
                            labelMonthSelect: 'Monat wählen',
                            labelYearSelect: 'Jahr wählen',
                            months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                            monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                            monthsLong: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                            weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
                            weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                            weekdaysAbbrev: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
                            today: 'Heute',
                            close: 'schliessen',
                            cancel: 'abbrechen',
                            clear: 'löschen',
                            done: 'wählen'
                        },
                    });

                    let startdate = data.data[id].startdate;
                    var startparts = startdate.split('.');
                    var mystartdate = new Date(startparts[2], startparts[1] -1, startparts[0]);
                    $('#startdate').val(mystartdate);
                    $('#startdate').datepicker({
                        format: 'dd.mm.yyyy',
                        setDefaultDate: true,
                        firstDay: 1,    
                        i18n: {
                            labelMonthNext: 'Nexter Monat',
                            labelMonthPrev: 'Vorheriger Monat',
                            labelMonthSelect: 'Monat wählen',
                            labelYearSelect: 'Jahr wählen',
                            months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                            monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                            monthsLong: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                            weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
                            weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                            weekdaysAbbrev: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
                            today: 'Heute',
                            close: 'schliessen',
                            cancel: 'abbrechen',
                            clear: 'löschen',
                            done: 'wählen'
                        },
                    });

                    $('#fach').val(data.data[id].fach);
                    $('#fach').prop('disabled', true);

                    $('#aufgaben').val(data.data[id].aufgaben);
                    $('#aufgaben').prop('disabled', true);

                    $('#status').val(data.data[id].status);


                    M.updateTextFields();
                    $('#enddate').addClass('valid');
                    $('#enddate').prop('disabled', true);

                    $('#startdate').addClass('valid');
                    $('#startdate').prop('disabled', true);

                    $('#aufgaben').addClass('valid');

                });                
            });
            
            $(".delete").on('click', function () {
                let id = $(this).parent().parent().attr('data-id');
                console.log('delete: ' + id);
                //remove(ref(db, 'data/' + id));
                update(ref(db, 'data/' + id), {status: 'erledigt'});
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


    
            // $('.edit').hide();
            // $('.delete').hide();
    
    
            // $('tbody tr').on('taphold', function(){
            //     console.log('taphold');
            // })
            // .on('swipeleft', function (){
            //     $(this, '.edit').find('.edit').show('slow');
            // })
            // .on('swiperight', function(){
            //     $(this, '.delete').find('.delete').show('slow');
            // })
    
    });

});

    $("#add").on('click', function () {
        console.log('add');
        console.log('Modal open and add');
    
        $('#modal').modal('open');
        $('#modal>div').load('sites/formular.html', function() {
            //$.get("js/formular.js");
            $('#Title').html('Eintrag hinzufügen')
        });
    });
