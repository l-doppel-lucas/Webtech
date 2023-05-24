
$('#status').formSelect();
//set heute in Datumsfeld
var today = new Date();
if (today.getMonth() < 10){
    var month = "0" + (today.getMonth() + 1);
} else {
    var month = today.getMonth() + 1;
}
var string = today.getDate() + "." + month + "." + today.getFullYear();

// var str = today.toISOString();

$('#startdate').val(string);

$('.datepicker').datepicker({
    format: 'dd.mm.yyyy',
    setDefaulDate: true,
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
    let formData = $('#myForm').serializeArray();
    console.log(formData);
    var data = $('#myForm').serialize();
    console.log(data);
});