document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       DIAPORAMA AUTOMATIQUE
       Toutes les images sont superposées.
    ========================= */
    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {
        let index = 0;

        const afficherSlide = () => {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        };

        afficherSlide();

        setInterval(() => {
            index = (index + 1) % slides.length;
            afficherSlide();
        }, 4500);
    }

    /* =========================
       RECHERCHE SIMPLE
    ========================= */
    const champ = document.getElementById("champRecherche");
    const boutonRecherche = document.querySelector(".recherche button");

    const rechercher = () => {
        const texte = champ.value.trim().toLowerCase();
        if (!texte) return;

        const cartes = document.querySelectorAll(".carte-info, .actualite-card");
        let trouve = false;

        cartes.forEach(carte => {
            const correspond = carte.textContent.toLowerCase().includes(texte);
            carte.style.outline = correspond ? "3px solid #0866d8" : "";
            if (correspond) {
                trouve = true;
                carte.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });

        if (!trouve) {
            alert("Aucune information trouvée pour : " + texte);
        }
    };

    boutonRecherche?.addEventListener("click", rechercher);
    champ?.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            rechercher();
        }
    });
});
