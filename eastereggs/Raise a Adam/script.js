import {OC} from './OC.js';

let meses = ["Janisra", "Fellastrea", "Malyya", "Linyaser", "Meiryla", "Junsyer", "Qynryos", "Nyndia", "Precyd", "Ophyra", "Idrilio", "Elistrae", "Hasikira", "Cersylio", "Estelyst"];
let meses32 = [1, 3, 5, 7, 9, 11, 13, 15];
let meses33 = [2, 4, 6, 8, 10, 12, 14];

let tiem = 1000;

let timeGame;

let seg = 0;
let min = 0;
let hor = 0;
let dia = 1;

let segGame  = ("0" + seg).slice(-2);
let minGame  = ("0" + min).slice(-2);
let horGame  = ("0" + hor).slice(-2);
let diaGame  = ("0" + dia).slice(-2);

let mesGame  = 0;
let anioGame = 3025;

let hora  = document.querySelector("#horaG");
let fecha = document.querySelector("#fechaG");
hora.textContent = `${horGame}:${minGame}:${segGame}`;
fecha.textContent = `${diaGame} / ${meses[mesGame]} / ${anioGame}`;

let adamsito = document.querySelector("#adam");
let statsAdam = document.querySelector("#stats");

let adamC = new OC('Adam', 'adamC', '#ffcf00', 9, 16, 7, 125, 32.81, 20, 80, 0, 60, 80, 100);
function tiempo(){
    timeGame = setInterval( ()=> {
        seg++;
        if(seg >= 60){
            min++;
            seg = 0;
        } else if(min >= 60){
            hor++;
            min = 0;
            seg = 0;
        } else if(hor >= 30){
            dia++;
            hor = 0;
            min = 0;
            seg = 0;
        } else if (meses32.includes(mesGame) && dia >= 32) {
            mesGame++;
            dia = 0;
            hor = 0;
            min = 0;
            seg = 0;
        } else if (meses33.includes(mesGame) && dia >= 33) {
            mesGame++;
            dia = 0;
            hor = 0;
            min = 0;
            seg = 0;
        } else if(mesGame >= 15){
            anioGame++;
            mesGame = 0;
            dia = 0;
            hor = 0;
            min = 0;
            seg = 0;
        };
        segGame  = ("0" + seg).slice(-2);
        minGame  = ("0" + min).slice(-2);
        horGame  = ("0" + hor).slice(-2);
        diaGame  = ("0" + dia).slice(-2);
        hora.textContent = `${horGame}:${minGame}:${segGame}`;
        fecha.textContent = `${diaGame} / ${meses[mesGame]} / ${anioGame}`
    }, tiem);
};
function feliz(obj){
    obj.animate([
        {backgroundColor : '#f4aabf', transform : 'translate(0px, 0px)'},
        {backgroundColor : '#f4aabf', transform : 'translate(0px, -15px)'},
        {backgroundColor : adamC.color, transform : 'translate(0px, 0px)'}],
        {duration: 1000, easing: 'cubic-bezier(.1,.55,.14,1.54)'});
};
adamsito.style.backgroundColor = adamC.color;
if(adamC.nombre === "Adam"){
    feliz(adamsito);
}

function adamsitoStatsUpdate(){
    let stats = document.createElement('p');
    stats.innerHTML = `${adamC.nombre} — ${adamC.edad} años (${adamC.cumpleanios})<br>Estado emocional: ${adamC.estado}<br>Energía: ${adamC.energia}/100<br>Salud: ${adamC.salud}/100<br>Hambre: ${adamC.hambre}/100<br>Estabilidad mental: ${adamC.estabMent}/100`;
    statsAdam.appendChild(stats);
}
tiempo();
adamsitoStatsUpdate();