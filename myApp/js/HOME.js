console.log('HOME.JS geladen');

$('#homeClick').on('click', function (e) {
    e.preventDefault();
    console.log('homeClick');
    $('#test').append('<br>- homeClick');
});