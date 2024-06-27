$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var imageSrc = button.data('src');
    var imageTitle = button.data('title');
    var modal = $(this);
    modal.find('.modal-body img').attr('src', imageSrc);
    modal.find('#imageTitle').text(imageTitle);
});