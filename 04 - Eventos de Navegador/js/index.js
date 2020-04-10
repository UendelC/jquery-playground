$(function () {
    // $('img').on('error', function () {
    //     $('img').attr('src', 'img/error.jpeg');
    // });

    // $('img').on('error', function () {
    //     var img = $(this).attr('src');
    //     alert('Imagem indisponível! ' + img);
    //     $('img').attr('src', 'img/error.jpeg');
    // });

    // $('img').width($(window).width()).height($(window).height());
    // $(window).resize(function () {
    //     $('img').width($(window).width()).height($(window).height());
    // });

    // $(window).scroll(function () {
    //     $('img').fadeOut(1000);
    // });


    // $('body').css('height', '5000px')
    // $(window).scroll(function () {
    //     var topo = $(window).scrollTop();
    //     console.log(topo);
    // });

    $('body').css('height', '5000px');

    $(window).scroll(function () {
        var topo = $(window).scrollTop();
        if (topo > 400) {
            $('img').fadeOut(1000);
        } else {
            $('img').fadeIn(1000);
        }
    });

});