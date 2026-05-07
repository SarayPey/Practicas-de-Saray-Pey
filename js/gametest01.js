import {akiko, adam, hasani, jacob, kizumi, melissa, varoun, yun, zaire, zelie, default1, default2} from './ocs.js'
let personajes = [akiko, adam, hasani, jacob, kizumi, melissa, varoun, yun, zaire, zelie];

// Variables
let gameMode = false;
let ini = document.querySelector("#butIn");
let messageLog = document.querySelector("#log");

let nA = document.querySelector(".hab.p12"); // Botón de espacio para celulares, es un gradiente entre el color del jugador 1 y del jugador 2

let kW = document.querySelector(".hab.p1.un");
let kA = document.querySelector(".hab.p1.do");
let kS = document.querySelector(".hab.p1.tr");
let kD = document.querySelector(".hab.p1.cu");
let kC = document.querySelector(".hab.p1.ci");

let kN = document.querySelector(".hab.p2.un");
let kJ = document.querySelector(".hab.p2.do");
let kO = document.querySelector(".hab.p2.tr");
let kI = document.querySelector(".hab.p2.cu");
let kM = document.querySelector(".hab.p2.ci");

let nom1 = document.querySelector("#name1");
let hpY = document.querySelector(".pro.u");
let p1 = document.querySelector(".personaje.uno");
let p1S = document.querySelector("#pj1Se");
let oc1S = document.querySelector(".selector.yo");
let habi1 = document.querySelectorAll(".hab.p1");
let hpC1 = document.querySelector(".nHpOc.u");
let p1Char = default1;
hpY.disabled = true;

let nom2 = document.querySelector("#name2");
let hpE = document.querySelector(".pro.d");
let p2 = document.querySelector(".personaje.dos");
let p2S = document.querySelector("#pj2Se");
let oc2S = document.querySelector(".selector.en");
let habi2 = document.querySelectorAll(".hab.p2");
let hpC2 = document.querySelector(".nHpOc.d");
let p2Char = default2;
hpE.disabled = true;

let music = document.querySelector("#mOoO");
let lib = document.querySelector("#muS");
let song = document.querySelector("#mus");
let sCho = document.querySelector("#sS");
console.log(`Reproduciendo ${song.textContent}`);

music.addEventListener('click', () => {
	if(music.textContent === "music_note"){
		music.textContent = "music_off";
		song.pause();
		console.log(`Pausando ${song.textContent}`);
	} else if (music.textContent === "music_off"){
		music.textContent = "music_note";
		song.currentTime = 0;
		song.volume = 1;
		song.play()
		console.log(`Reproduciendo ${song.textContent}`);
	}
});

lib.addEventListener('click', () => {
	if(sCho.style.display === "none"){
		sCho.style.display = "inline";
	} else if (sCho.style.display === "inline"){
		sCho.style.display = "none";
	}
})

sCho.addEventListener('change', (ev)=> {
	if (ev.target.value ===  "dS"){
		song.src = "../audio/001.DigiShop.mp3";
		song.textContent = "001 - \"Digi-Shop\", Saray Pey";
	} else if(ev.target.value === "cAD"){
		song.src = "../audio/002.ClearAdventureDay.mp3";
		song.textContent = "002 - \"Clear adventure day\", Saray Pey";
	} else if (ev.target.value === "cDM"){
		song.src = "../audio/003.ChefDetectiveMantra.mp3";
		song.textContent = "003 - \"Chef detective mantra\", Saray Pey";
	} else if (ev.target.value === "f"){
		song.src = "../audio/004.FIGHT.mp3";
		song.textContent = "004 - \"FIGHT\", Saray Pey";
	} else if (ev.target.value === "s"){
		song.src = "../audio/005.Strings.mp3";
		song.textContent = "005 - \"Strings\", Saray Pey";
	} else if (ev.target.value === "gJ"){
		song.src = "../audio/006.GreatJob.mp3";
		song.textContent = "006 - \"Great job\", Saray Pey";
	}
	song.volume = 1;
	song.currentTime = 0;
	song.play();
	console.log(`Canción cambiada.`);
	console.log(`Reproduciendo ${song.textContent}`);
})

p1S.addEventListener('click', () => {
	oc1S.innerHTML = "";
	for (const x of personajes) {
		let pNew = document.createElement('p');
		let valor = `${x.nombre}<br>Rango de atk: ${x.minATK}-${x.maxATK} | HP: ${x.maxHp}<br> `;
		pNew.innerHTML += valor;
		oc1S.appendChild(pNew);
		pNew.addEventListener('click', () => {
				if (p2Char.varName === x.varName) {
					alert("Personaje ocupado");
				} else {
					p1Char = x;
					msg(`Jugador 1 planea jugar con ${x.nombre}`);
					p1.style.backgroundColor = x.color;
					nom1.innerHTML = x.nombre;
					nA.style.backgroundImage = `linear-gradient(90deg, ${p1Char.color}, ${p2Char.color})`;
					for (let hab of habi1) {
						hab.style.backgroundColor = x.color;
					}
				}
			}
		)
	}
});

p2S.addEventListener('click', () => {
	oc2S.innerHTML = "";
	//Aquí debe habilitar la muestra y selección de personajes
	for (const x of personajes) {
		let pNew = document.createElement('p');
		let valor = `${x.nombre}<br>Rango de atk: ${x.minATK}-${x.maxATK} | HP: ${x.maxHp}<br>`;
		pNew.innerHTML += valor;
		oc2S.appendChild(pNew);
		pNew.addEventListener('click', () => {
				if (p1Char.varName === x.varName) {
					alert("Personaje ocupado");
				} else {
					p2Char = x;
					msg(`Jugador 2 planea jugar con ${x.nombre}`);
					p2.style.backgroundColor = x.color;
					nom2.innerHTML = x.nombre;
					nA.style.backgroundImage = `linear-gradient(90deg, ${p1Char.color}, ${p2Char.color})`;
					for (let hab of habi2) {
						hab.style.backgroundColor = x.color;
					}
				}
			}
		)
	}
});

if (!gameMode){
	ini.disabled = false;
	p1S.disabled = false;
	oc1S.disabled = false;
	p1Char.hp = p1Char.maxHp;
	p2S.disabled = false;
	oc2S.disabled = false;
	p2Char.hp = p1Char.maxHp;
};

ini.addEventListener('click', () => {
	if(p1Char === default1 || p2Char === default2){
		alert("Aviso: falta uno o ambos espacios.");
	} else {
		oc1S.innerHTML = "";
		oc2S.innerHTML = "";
		ini.disabled = true;
		p1S.disabled = true;
		oc1S.disabled = true;
		hpC1.innerHTML = p1Char.hp + "/" + p1Char.maxHp;
		hpY.style.width = "var(--cienM)";
		hpY.style.backgroundColor = "var(--cien)";
		hpE.style.width = "var(--cienM)";
		hpE.style.backgroundColor = "var(--cien)";
		p2S.disabled = true;
		oc2S.disabled = true;
		hpC2.innerHTML = p2Char.hp + "/" + p2Char.maxHp;
		console.log("Iniciando juego");
		gameMode = true;
		if(gameMode){
			console.log(`Canción cambiada.`);
			song.pause();
			song.src = "../audio/004.FIGHT.mp3";
			song.textContent = "004 - \"FIGHT\", Saray Pey";
			song.currentTime = 0;
			song.play();
		console.log(`Reproduciendo ${song.textContent}`);
			game();
		}
	}
});

let turnoActual = null;
let objetivo = null;

function turnoChange(){
		if(!gameMode){
			return;
		}
	if(turnoActual === p1Char){
		turnoActual = p2Char;
		objetivo = p1Char;
		msg(`¡Es turno del jugador 2 (${turnoActual.nombre})!`);
		msg("Presiona ESPACIO o una tecla de habilidad para atacar…");
	} else {
		turnoActual = p1Char;
		objetivo = p2Char;
		msg(`¡Es turno del jugador 1 (${turnoActual.nombre})!`);
		msg("Presiona ESPACIO o una tecla de habilidad para atacar…");
	}
}

function basicG(){
		if(!gameMode){
			return;
		}
	let atk = turnoActual.cATK;
	objetivo.hp -= atk;
	if(objetivo.hp < 0){
		objetivo.hp = 0;
	}
	if(objetivo === p1Char){
		p1.animate(
			[{ backgroundColor: "#ff0000", transform: "translate(-4px)"},
			{ backgroundColor: `${p1Char.color}`, transform: "translate(0px)"}
			], {duration: 250, easing: "cubic-bezier(1,0,.28,1.01)", iterations: 1})
		} else {
		p2.animate(
			[{ backgroundColor: "#ff0000", transform: "translate(4px)"},
				{ backgroundColor: `${p2Char.color}`, transform: "translate(0px)"}
			], {duration: 250, easing: "cubic-bezier(1,0,.28,1.01)", iterations: 1})
		};
	msg(`${turnoActual.nombre} usó ataque normal contra ${objetivo.nombre}.`);
	msg(`${turnoActual.nombre} atacó con ${atk} de daño`);
	lifeUpdate();
	msg("--HA TERMINADO EL TURNO");
	winCheck();
	turnoChange();
};

function msg(mensaje){
	messageLog.innerHTML += "<br>";
	messageLog.innerHTML += mensaje;
	messageLog.scrollTop = messageLog.scrollHeight;
};

function game(){
	const messageIn = "--HA INICIADO UNA PARTIDA--";
	msg(messageIn);
	hpY.disabled = false;
	console.log(`Habilitando personaje 1: ${p1Char.nombre}`);
	hpE.disabled = false;
	console.log(`Habilitando personaje 2: ${p2Char.nombre}`);
	msg("Asignando primer turno…");
	let turnoIni = Math.floor(Math.random() * 2);
	console.log(turnoIni);
	if(turnoIni === 0){
		msg(`El primer turno es de Jugador 1 (${p1Char.nombre})`);
		turnoActual = p1Char;
		objetivo = p2Char;
	} else {
		msg(`El primer turno es de Jugador 2 (${p2Char.nombre})`);
		turnoActual = p2Char;
		objetivo = p1Char;
	};
	msg("Esperando movimiento…");
	msg("Presiona ESPACIO o una tecla de habilidad para atacar…");
};

function lifeUpdate(){
		hpC1.innerHTML = p1Char.hp + "/" + p1Char.maxHp;
		hpY.style.width = p1Char.hp * 2 + "px"
		if (p1Char.hp > 75){
			hpY.style.backgroundColor = "#00ff00";
		} else if(p1Char.hp <= 75 && p1Char.hp > 50){
			hpY.style.backgroundColor = "#aaff00";
		} else if(p1Char.hp <= 50 && p1Char.hp > 25){
			hpY.style.backgroundColor = "#ffff00"
		} else if(p1Char.hp <= 25 && p1Char.hp > 10){
			hpY.style.backgroundColor = "#ffaa00"
		} else if(p1Char.hp <= 10 && p1Char.hp > 5){
			hpY.style.backgroundColor = "#ff7700"
		} else if(p1Char.hp <= 5 && p1Char.hp > 0){
			hpY.style.backgroundColor = "#ff5500"
		} else if(p1Char.hp <= 0){
			hpY.style.backgroundColor = "#ff0000"
		}

		hpC2.innerHTML = p2Char.hp + "/" + p2Char.maxHp;
		hpE.style.width = p2Char.hp * 2 + "px"
		if (p2Char.hp > 75){
			hpE.style.backgroundColor = "#00ff00";
		} else if(p2Char.hp <= 75 && p2Char.hp > 50){
			hpE.style.backgroundColor = "#aaff00";
		} else if(p2Char.hp <= 50 && p2Char.hp > 25){
			hpE.style.backgroundColor = "#ffff00"
		} else if(p2Char.hp <= 25 && p2Char.hp > 10){
			hpE.style.backgroundColor = "#ffaa00"
		} else if(p2Char.hp <= 10 && p2Char.hp > 5){
			hpE.style.backgroundColor = "#ff7700"
		} else if(p2Char.hp <= 5 && p2Char.hp > 0){
			hpE.style.backgroundColor = "#ff5500"
		} else if(p2Char.hp <= 0){
			hpE.style.backgroundColor = "#ff0000"
		}
};

function winCheck(){
	lifeUpdate()
	if (p1Char.hp <= 0){
		p1Char.hp = 0;
		msg(`¡${p2Char.nombre} ha ganado!`);
		msg("¡SE HA ACABADO EL JUEGO!");
		gameMode = false;
		ini.disabled = false;
		p1S.disabled = false;
		oc1S.disabled = false;
		p1Char.hp = p1Char.maxHp;
		p2S.disabled = false;
		oc2S.disabled = false;
		p2Char.hp = p2Char.maxHp;
	} else if (p2Char.hp <= 0){
		p2Char.hp = 0;
		msg(`¡${p1Char.nombre} ha ganado!`);
		msg("¡SE HA ACABADO EL JUEGO!");
		gameMode = false;
		ini.disabled = false;
		p1S.disabled = false;
		oc1S.disabled = false;
		p1Char.hp = p1Char.maxHp;
		p2S.disabled = false;
		oc2S.disabled = false;
		p2Char.hp = p2Char.maxHp;
	} else {
		return;
	}
	gameMode = false;
};
  
document.addEventListener('keydown', (ev) => {
	console.log(ev.key);
	if(!gameMode){
		return;
	}
	if(ev.key === ' '){
		console.log("Ataque normal");
		basicG();
	}

	if (turnoActual === p1Char && ev.key === 'w' || ev.key === 'W'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[0].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[0].nombreH}!`);
		winCheck();
		turnoChange();
	}
	if (turnoActual === p1Char && ev.key === 'a' || ev.key === 'A'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[1].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[1].nombreH}!`);
		winCheck();
		turnoChange();
	}
	if (turnoActual === p1Char && ev.key === 's' || ev.key === 'S'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[2].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[2].nombreH}!`);
		winCheck();
		turnoChange();
	}
	if (turnoActual === p1Char && ev.key === 'd' || ev.key === 'D'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[3].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[3].nombreH}!`);
		winCheck();
		turnoChange();
	}
	if (turnoActual === p1Char && ev.key === 'c' || ev.key === 'C'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[4].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[4].nombreH}!`);
		winCheck();
		turnoChange();
	}

	if (turnoActual === p2Char && ev.key === 'n' || ev.key === 'N'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[0].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[0].nombreH}!`);
		winCheck();
		turnoChange();
	}
	if (turnoActual === p2Char && ev.key === 'j' || ev.key === 'J'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[1].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[1].nombreH}!`);
		winCheck();
		turnoChange();
	}
	if (turnoActual === p2Char && ev.key === 'o' || ev.key === 'O'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[2].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[2].nombreH}!`);
		winCheck();
		turnoChange();
	}
	if (turnoActual === p2Char && ev.key === 'i' || ev.key === 'I'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[3].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[3].nombreH}!`);
		winCheck();
		turnoChange();
	}
	if (turnoActual === p2Char && ev.key === 'm' || ev.key === 'M'){
		if(!gameMode){
			return;
		}
			turnoActual.habs[4].code(turnoActual, objetivo);
		msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[4].nombreH}!`);
		winCheck();
		turnoChange();
	}
});

nA.addEventListener('click', () => {
	basicG();
});

kW.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[0].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[0].nombreH}!`);
	winCheck();
	turnoChange();
});
kA.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[1].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[1].nombreH}!`);
	winCheck();
	turnoChange();
});
kS.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[2].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[2].nombreH}!`);
	winCheck();
	turnoChange();
});
kD.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[3].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[3].nombreH}!`);
	winCheck();
	turnoChange();
});
kC.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[4].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[4].nombreH}!`);
	winCheck();
	turnoChange();
});

kN.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[0].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[0].nombreH}!`);
	winCheck();
	turnoChange();
});
kJ.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[1].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[1].nombreH}!`);
	winCheck();
	turnoChange();
});
kO.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[2].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[2].nombreH}!`);
	winCheck();
	turnoChange();
});
kI.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[3].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[3].nombreH}!`);
	winCheck();
	turnoChange();
});
kM.addEventListener('click', () =>{
	if(!gameMode){
		return;
	}
	turnoActual.habs[4].code(turnoActual, objetivo);
	msg(`¡${turnoActual.nombre} ha usado ${turnoActual.habs[4].nombreH}!`);
	winCheck();
	turnoChange();
});