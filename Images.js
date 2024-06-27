<<<<<<< HEAD
$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var imageSrc = button.data('src');
    var imageTitle = button.data('title');
    var modal = $(this);
    modal.find('.modal-body img').attr('src', imageSrc);
    modal.find('#imageTitle').text(imageTitle);
=======
$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var imageSrc = button.data('src');
    var imageTitle = button.data('title');
    var modal = $(this);
    modal.find('.modal-body img').attr('src', imageSrc);
    modal.find('#imageTitle').text(imageTitle);
>>>>>>> 86dde0c8a69128f81c6821935231cd99efc1ccda
});