document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll("#Campos .card-container");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});