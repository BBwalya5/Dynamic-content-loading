    function loadContent(contentFile) {
        $.get(contentFile, function(data) {
            $('#main-content').html(data);
        });
    }
    const currentContent = localStorage.getItem('currentContent') || 'homeContent.js';
    loadContent(currentContent);

    $('a[data-content]').on('click', function(e) {
        e.preventDefault();
        const contentFile = $(this).data('content');
        localStorage.setItem('currentContent', contentFile); 
        loadContent(contentFile);
    });


$(document).ready(function() {
    $('#nav-icon').on('click', function() {
        $('#sidebar').toggle();
    });
});



