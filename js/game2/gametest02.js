import {adam, melissa} from './charList.js';
let ocList = [adam, melissa]

let meses = ["Janisra", "Fellastrea", "Malyya", "Linyaser", "Meiryla", "Junsyer", "Qynryos", "Nyndia", "Precyd", "Ophyra", "Idrilio", "Elistrae", "Hasikira", "Cersylio", "Estelyst"];
let meses32 = [1, 3, 5, 7, 9, 11, 13, 15];
let meses33 = [2, 4, 6, 8, 10, 12, 14];

let tiem = 1000;

let segGame  = 0;
let minGame  = 0;
let horGame  = 0;
let diaGame  = 1;
let mesGame  = 0;
let anioGame = 3045;

let hora  = document.querySelector("#horaG");
let fecha = document.querySelector("#fechaG");

let messageLog = document.querySelector("#chat");

function msg(mensaje){
	messageLog.innerHTML += "<br>";
	messageLog.innerHTML = mensaje;
	messageLog.scrollTop = messageLog.scrollHeight;
};

hora.textContent = `${horGame}:${minGame}:${segGame}`;
fecha.textContent = `${diaGame} / ${meses[mesGame]} / ${anioGame}`;
function tiempo(){
	segGame++;
	if(segGame >= 60){
		minGame++;
		segGame = 0;
	} else if(minGame >= 60){
		horGame++;
		minGame = 0;
		segGame = 0;
	} else if(horGame >= 30){
		diaGame++;
		horGame = 0;
		minGame = 0;
		segGame = 0;
	} else if (meses32.includes(mesGame) && diaGame >= 32) {
		mesGame++;
		diaGame = 0;
		horGame = 0;
		minGame = 0;
		segGame = 0;
	} else if (meses33.includes(mesGame) && diaGame >= 33) {
		mesGame++;
		diaGame = 0;
		horGame = 0;
		minGame = 0;
		segGame = 0;
	} else if(mesGame >= 15){
		anioGame++;
		mesGame = 0;
		diaGame = 0;
		horGame = 0;
		minGame = 0;
		segGame = 0;
	};
	hora.textContent = `${horGame}:${minGame}:${segGame}`;
	fecha.textContent = `${diaGame} / ${meses[mesGame]} / ${anioGame}`;
};


setInterval(() => {
	tiempo();
}, 1000);
