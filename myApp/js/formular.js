$('#cancel').on('click', function(e){
    e.preventDefault();
    var modal = M.Modal.getInstance($('#modal'));
    modal.close();
});

$('#save').on('click', function(e){
    e.preventDefault();
    var modal = M.Modal.getInstance($('#modal'));
    modal.close();
});