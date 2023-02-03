(function ($) {
    $.fn.my_wysiwyg = function( options ) {
        var settings = $.extend({
            color : "",
            backgroundColor : "",
        }, options );

        return this.css({
            color : settings.color,
            backgroundColor : settings.backgroundColor,
        });
    };
})(jQuery);

if (localStorage.getItem('lastSave')) {
    $('#result').html(localStorage.getItem("lastSave"));
    $('#textarea').html(localStorage.getItem("lastSave"));
}

$('#weight').click(function() {
    wrapText("<p font-weight='100'>", "</p>");
    $('#menu').fadeOut();
})

$('#save').click(function() {
    localStorage.setItem("lastSave", $('#textarea').val());
    $('#result').html(localStorage.getItem("lastSave"));
})

$('#delete').click(function () {
    localStorage.setItem("lastSave", "");
    $('#result').html(localStorage.getItem("lastSave"));
    $('#textarea').val("");
})

function wrapText(openTAG, closeTAG)
{
    var desc = $("#textarea").val(); // Selection de la valeur entréé dans le textarea
    var selStart = $("#textarea")[0].selectionStart; // on recupere le debut de la selection
    var selEnd = $("#textarea")[0].selectionEnd; // on recupere la fin de la selection
    var text = desc.substring(selStart, selEnd); // on supprime ce qu'il y a avant et apres la selection
    var before = desc.substring(desc, selStart); // on recupere ce qu'il y a avant la selection
    var after = desc.substring(selEnd, desc.length); // on recuperer ce au'il y a apres la selection
    if (text != "")
        $("#textarea").val(before + openTAG + text + closeTAG + after); // on ajoute tout dans le textarea
    else {
        $("#textarea").val(openTAG + desc + closeTAG);
    }
}

jQuery(function($) {
    var input = $('#textarea');
    input.on('keydown', function(event) {
        var key = event.keyCode || event.charCode;
        if( key == 8 || key == 46 )
        $('#menu').fadeOut();
        if( key == 13) {
            wrapText("", "</br>")
        }
    });
});
