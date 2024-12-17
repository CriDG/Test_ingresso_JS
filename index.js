const btnsovrascrivi = document.getElementById('sovrascrivi');
const btnaggclas = document.getElementById('aggclas');
const btnrimclas = document.getElementById('rimclas');
const btnaggpar = document.getElementById('aggpar');
const testo = document.getElementById('test');
const par = document.getElementById('par');


btnsovrascrivi.onclick = sovrascrivi;
function sovrascrivi () {
    document.getElementById('test').innerHTML = 'Spero di passare...';
}


btnaggclas.onclick = colora;
function colora() {
    testo.style.color = 'red';
    testo.style.backgroundColor = 'yellow'; 
}

btnrimclas.onclick = reseta;
function reseta() {
    testo.style.color = 'black';
    testo.style.backgroundColor = '';
    testo.style.fontSize = '';
}

btnaggpar.onclick = aggiungi;
function aggiungi () {
    document.getElementById('par').innerHTML = 'sarò ammesso?';
}