// hier wordt de functie om de afbeelding source aan te passen aangemaakt
function changeImage() {

// de variablen worden aangemaakt en het element: ID wordt uit de HTMl gehaald
    var image = document.getElementById('download');

//als er geklikt wordt op de download afbeelding verandert de source naar de afbeelding van het vinkje
    if (image.src.includes("images/download.png")) {
        image.src = "images/check-symbol.png";
    } else {
        (image.src.includes("images/download.png"))
        image.src = "images/download.png";

    }

}
