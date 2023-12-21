$(document).ready(function () {

    $('#points').on('click', '.circle-button-mid', function() {
        $('.circle-button-mid').removeClass('selected')
        $(this).addClass('selected')
    })
    
});