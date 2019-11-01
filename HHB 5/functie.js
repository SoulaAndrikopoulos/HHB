jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true * /

//De functie van de load / GIF wordt hier aangemaakt
request.onload = function () {
populateSection(request.response);
console.log(request.response);
}


//De event load wordt aan het html element met class "loader" toegepast
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; //class "loader hidden"
});
