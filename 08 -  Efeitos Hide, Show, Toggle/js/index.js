$(function () {
    var ex = $('.ex1');

    $('.ev1').on('click', function () {
        ex.hide('slow');
    });

    $('.ev2').on('click', function () {
        ex.show('slow')
    });

    $('.ev3').on('click', function () {
        ex.toggle('slow');
    });

    $('.ev4').keyup(function () {
        var texto = $(this).val();

        switch (texto) {
            case 'hide':
                ex.hide('slow');
                break;
            case 'show':
                ex.show('slow');
                break;
            case 'toggle':
                ex.toggle('slow');
                break;
        }
    });
});