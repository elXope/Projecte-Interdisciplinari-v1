$(document).ready(function() {

    // Contingut noms dies
    (function() {
        $(window).resize(function() {
            let diesMin = ['Dll', 'Dt', 'Dm', 'Dj', 'Dv', 'Ds', 'Dg'];
            let diesMax = ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte', 'Diumenge'];
            if ($('.calendari').width() < 760) {
                let cont = 0;
                $('.calendari__nomDia p').each(function() {
                    $(this).text(diesMin[cont]);
                    cont++;
                });
            } else {
                let cont = 0;
                $('.calendari__nomDia p').each(function() {
                    $(this).text(diesMax[cont]);
                    cont++;
                });
            }
        });
    })();

    // Llibreta tatxar
    (function() {
        $('.form-check-input').change(function() {
            if($(this).prop('checked')) {
                $(this).parent().addClass('text-muted');
                $(this).siblings().addClass('text-decoration-line-through');
                $('.llibreta').append($(this).parent());
            } else {
                $(this).parent().removeClass('text-muted');
                $(this).siblings().removeClass('text-decoration-line-through');
                $(this).parent().insertBefore($('.form-check-input').parent('.text-muted')[0]);
            }
        });
    })();

});