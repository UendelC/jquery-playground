$(function () {
    var ex = $('.ex1');

    $('.ev1').on('click', function () {
        $(this).css('background', "#ccc");
        ex.text('Você clicou');
    });

    $('.ev2').dblclick(function () {
        $(this).css('background', '#ccc');
        ex.text('Você deu dois cliques');
    });

    $('.ev3').focusin(function () {
        $(this).css('background', '#ccc');
        ex.text('Você deu foco');
    }).focusout(function () {
        $(this).css('background', '#000');
        ex.text('Você tirou o foco');
    });

    $('.ev4').hover(function () {
        $(this).css('background', '#ccc');
        ex.text('Você passou o mouse');
    });
});