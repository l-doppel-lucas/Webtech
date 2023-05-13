console.log('LIST.JS geladen');

$("#add").on('click', function () {
    console.log('add');
});
$(".edit").on('click', function () {
    let id = $(this).parent().parent().attr('data-id');
    console.log('edit: ' + id);
});
$(".delete").on('click', function () {
    let id = $(this).parent().parent().attr('data-id');
    console.log('delete: ' + id);
});

$("tbody tr").hover(function(){
    $(this).addClass('greyHover');
}, function() {
    $(this).removeClass('greyHover');
});

$('button').hover(function () {
    $(this).addClass('pointer');

}, function () {
    $(this).removeClass('pointer');
}
);


$("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});