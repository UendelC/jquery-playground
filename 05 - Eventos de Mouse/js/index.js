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

    $('.ev5').mousedown(function () {
        $(this).css('background', '#ccc');
        ex.text('Você apertou o mouse');

    }).mouseup(function () {
        $(this).css('background', '#000');
        ex.text('você soltou o mouse');
    });

    var a = 0;
    $('.ev6').mouseenter(function () {
        a++;
        ex.text('Entradas do Mouse ' + a);
    }).mouseout(function () {
        ex.text('Saida do mouse');
    });
    var b = 0;

    $('.ev7').mouseover(function () {
        b++;
        ex.text('Mouse over: ' + b);
    }).mouseleave(function () {
        ex.text('Mouse leave');
    });

    $('.ev8').mousemove(function (move) {
        var localx = move.pageX;
        var localy = move.pageY;

        ex.text('Movimento X: ' + localx + 'Movimento Y: ' + localy);
    });
});