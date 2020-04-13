$(function () {
    var ex = $('.ex1');

    $('.ev1').focus(function () {
        ex.text($(this).attr('placeholder'));
    }).keyup(function () {
        if ($(this).val() == 'pontocom') {
            $('.ev2').focus();
        }
    });

    // $('.ev1').blur(function () {
    //     ex.text('Saida do campo: ' + $(this).attr('name'));
    // });

    $('.ev1').change(function () {
        ex.text('Campo alterado: ' + $(this).val());
    });

    $('.selecionar').on('click', function () {
        $('.ev3').select();
        $('form').submit(function () {
            return false;
        });
    });
});