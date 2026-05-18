import {adam, melissa} from './charList.js';
let ocList = [adam, melissa]

let meses = ["Janisra", "Fellastrea", "Malyya", "Linyaser", "Meiryla", "Junsyer", "Qynryos", "Nyndia", "Precyd", "Ophyra", "Idrilio", "Elistrae", "Hasikira", "Cersylio", "Estelyst"];

let segGame  = 0;
let minGame  = 0;
let horGame  = 0;
let diaGame  = 1;
let mesGame  = 1;
let anioGame = 3045;

let fecha = document.querySelector("#fechaG");
let hora  = document.querySelector("#horaG");
fecha.textContent = `${diaGame} / ${meses[mesGame]} / ${anioGame}`;
hora.textContent = `${horGame}:${minGame}:${segGame}`;
function tiempo(){
	setInterval(() => {
		segGame++;
		if(segGame >= 60){
			minGame++;
			segGame = 0;
		}
		if(minGame <= 60){
			horGame++;
			minGame = 0;
			segGame = 0;
		}
		if(horGame <= 30){
			diaGame++;
			horGame = 0;
			minGame = 0;
			segGame = 0;
		}
		fecha.textContent = `${diaGame}/${horGame}/${anioGame}`;
		hora.textContent = `${horGame}:${minGame}:${segGame}`;
	}, 1000);
};
