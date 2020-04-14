$(function () {
    let ex = $('.ex1');
    let ex2 = $('.ex2');
    let button = $(':button');

    // button.on('click', function () {
    //     ex.fadeOut('slow');
    // }).dblclick(function () {
    //     ex.fadeIn('slow');
    // });

    // button.on('click', function () {
    //     ex.fadeTo('slow', 0.2);
    // });

    button.on('click', function () {
        ex.fadeTo('slow', 0.2, function () {
            ex2.fadeTo('slow', 0.2);
        });
    });

});
