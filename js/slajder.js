var listaslika = document.getElementById("lista-slika");
var slajderDugmad = document.getElementsByClassName("pos-dugme");

var status = 0;
var positionUit = -100;

function pomeriSliku(x){
    var i;

    for(let i = 0; i < slajderDugmad.length; i++){
        slajderDugmad[i].style.backgroundColor = "#ffffff44";

    }

    slajderDugmad[x].style.backgroundColor = "#fff";
    position = x * positionUit;
    listaslika.style.left = position + "%";
}