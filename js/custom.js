$(document).ready(function() {

    // Contingut noms dies
    (function() {
        $(window).resize(function() {
            let diesMin = ['Dll', 'Dt', 'Dm', 'Dj', 'Dv', 'Ds', 'Dg'];
            let diesMax = ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte', 'Diumenge'];
            if ($(this).width() < 1410) {
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

});