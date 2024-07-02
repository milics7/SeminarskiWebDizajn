let tamnaTema = localStorage.getItem('tamnaTema');
const tamnaTemaToggle = document.querySelector('.dugme-tamna-tema');

// proveri da li je tamna tema upaljnea
// ako je upaljena, ugasi je
// ako je ugasena, upali je

const upaliTamnuTemu = () =>{
    document.body.classList.add('tamnatema');
    localStorage.setItem('tamnaTema', 'upaljen');
};

const ugasiTamnuTemu = () =>{
    document.body.classList.remove('tamnatema');
    localStorage.setItem('tamnaTema', null);
};

if(tamnaTema === 'upaljen'){
    upaliTamnuTemu();
}

tamnaTemaToggle.addEventListener('click', () => {
    tamnaTema = localStorage.getItem('tamnaTema');
    if(tamnaTema !== 'upaljen'){
        upaliTamnuTemu();
        console.log(tamnaTema);
    }else{
        ugasiTamnuTemu();
        console.log(tamnaTema);
    }
})