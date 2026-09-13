document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       DATE DES ACTUALITÉS
    ========================= */

    const datesActualites =
        document.querySelectorAll(".date-actualite");

    const aujourdHui = new Date();

    const dateFormatee =
        aujourdHui.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    datesActualites.forEach(function (element) {
        element.textContent = dateFormatee;
    });


    /* =========================
       DIAPORAMA AUTOMATIQUE
    ========================= */

    const slides =
        document.querySelectorAll(".slide");

    if (slides.length === 0) {
        return;
    }

    let index = 0;

    function afficherSlide() {

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }


    /* Afficher la première image */
    afficherSlide();


    /* Passer automatiquement à la suivante */
    setInterval(function () {

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        afficherSlide();

    }, 4000);

});