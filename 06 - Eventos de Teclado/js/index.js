$(function () {
    var ex = $('.ex1');
    // $('.key').keydown(function () {
    //     ex.text($(this).val());
    // });

    $('.key').keyup(function () {
        ex.text($(this).val());
    });
});