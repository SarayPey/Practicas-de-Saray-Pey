import {none, adam, melissa} from './charList.js';
let ocList = [adam, melissa]

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
let anioGame = 3045;

let hora  = document.querySelector("#horaG");
let fecha = document.querySelector("#fechaG");

let fast   = document.querySelector("#bFlash");
let normal = document.querySelector("#bNormal");
let playP  = document.querySelector("#bPausa");

let oc = document.querySelector("#char");

let ocChat = document.querySelector("#chat");
let dialog = document.createElement('p');

function msg(mensaje){
	ocChat.innerHTML += "<br>";
	dialog.innerHTML += mensaje;
	ocChat.innerHTML += dialog.innerHTML;
	ocChat.scrollTop = ocChat.scrollHeight;
};

oc.addEventListener('click', () => {
	msg("Hola.");
})

hora.textContent = `${horGame}:${minGame}:${segGame}`;
fecha.textContent = `${diaGame} / ${meses[mesGame]} / ${anioGame}`;

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

function changeTime(newT){
	tiem = newT;
	clearInterval(timeGame);
	tiempo()
}

tiempo();

fast.addEventListener("click", () => {
	fast.disabled = true;
	normal.disabled = false;
	tiem = 10000;
	changeTime(tiem);
});
normal.addEventListener("click", () => {
	fast.disabled = false;
	normal.disabled = true;
	tiem = 1000;
	changeTime(tiem);
});

