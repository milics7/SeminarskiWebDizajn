// uzmi podatke
const nameInput = document.querySelector("#ime");
const email = document.querySelector("#email");
const poruka = document.querySelector("#poruka");
const uspesno = document.querySelector("#uspesno");
const errorNodes = document.querySelectorAll(".greska");
//validiranje
function validirajFormu(){

    clearMessages();
    let errorflag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Ime ne može biti prazno";
        nameInput.classList.add("greska-pri-unosu");
        errorflag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Pogrešna email adresa";
        email.classList.add("greska-pri-unosu");
        errorflag = true;
    }

    if(poruka.value.length < 1){
        errorNodes[2].innerText = "Unesite poruku";
        poruka.classList.add("greska-pri-unosu");
        errorflag = true;
    }

    if(!errorflag){
        uspesno.innerText = "Uspešno ste poslali poruku!"
    }
}
// obrisi uspesno/neuspesno poruku
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText= "";
    }
    uspesno.innerText = "";
    nameInput.classList.remove("greska-pri-unosu");
    email.classList.remove("greska-pri-unosu");
    poruka.classList.remove("greska-pri-unosu");
}

// da li je validan mejl
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}