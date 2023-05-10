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

