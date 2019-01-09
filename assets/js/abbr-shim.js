// make <abbr> clickable
$(function() {
    $('abbr').on('click', function() {
        alert($(this).attr('title'));
    });
});