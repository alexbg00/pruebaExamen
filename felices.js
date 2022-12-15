let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let año = fecha.getFullYear();
//mostrar fecha dentro de la clase dia
document.querySelector(".dia").innerHTML = dia + "/" + mes + "/" + año;
//dar estilos a la fecha
document.querySelector(".dia").style.color = "white";

window.setInterval(parpadeo, 500);
var color = "red";

function parpadeo() {
    var blink = document.getElementById("parpadeo");
    color = (color == "#ffffff") ? "purple" : "#ffffff";
    blink.style.color = color;
    blink.style.fontSize = '30px';
}

//musica 
const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};
const $botonReproducir = document.querySelector("#btnReproducir"),
    $botonPausar = document.querySelector("#btnPausar"),
    $botonReiniciar = document.querySelector("#btnReiniciar");
// El sonido que podemos reproducir o pausar
const sonido = cargarSonido("musica.mp3");
$botonReproducir.onclick = () => {
    sonido.play();
};
$botonPausar.onclick = () => {
    sonido.pause();
};
$botonReiniciar.onclick = () => {
    sonido.currentTime = 0;
};

//animacion de texto
