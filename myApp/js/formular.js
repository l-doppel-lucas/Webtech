console.log("formular.js geladen");

import{
    db,
} from './module.js';

import {
    push,
    ref,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';


$('#fach').formSelect();

$('#status').formSelect();
//set heute in Datumsfeld
// var today = new Date();
// var todparts = today.split('.');
var mytoday = new Date();

// var str = today.toISOString();

$('#startdate').val(mytoday);

$('#enddate').val(mytoday);

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


$('#cancel').on('click', function(e){
    e.preventDefault();
    var modal = M.Modal.getInstance($('#modal'));
    modal.close();
});

// $('#save').on('click', function(e){
//     e.preventDefault();
//     var modal = M.Modal.getInstance($('#modal'));
//     modal.close();
// });

//Wert in Textfeld setzen
//$('#last_name').val('Mami');
//$('#last_name').addClass('valid');
//M.updateTextFields();

//wert auslesen
//let lastName = $('#last_name').val();
//console.log(lastName);

//Formular auslesen
$('#myForm').on('submit', function (e) {
    e.preventDefault();
    var modal = M.Modal.getInstance($('#modal'));

    // eingegebene Daten in Array schreiben
    // let formData = $('#myForm').serializeArray();
    // console.log(formData);
    // var data = $('#myForm').serialize();
    // console.log(data);

    // Daten aus Formular auslesen, in Array schreiben und in DB "Pushen"
    let startdate = $('#startdate').val();
    let enddate = $('#enddate').val();
    let fach = $('#fach').val();
    let aufgaben = $('#aufgaben').val();
    let status = $('#status').val();

    let array = {startdate: startdate, enddate: enddate, fach: fach, aufgaben: aufgaben, status: status }

    push(ref(db, 'data/'), array);
    modal.close();
});