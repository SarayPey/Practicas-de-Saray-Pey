class OC {
	constructor(nombre, varName, minATK, maxATK, hp, color){
		this.nombre = nombre;
		this.varName = varName;
		this.minATK = minATK;
		this.maxATK = maxATK;
		this.maxHp = 100;
		this.hp = 100;
		this.color = color;
	}
}

// Personajes //
let default1 = new OC("Nombre OC", "noOC", 1, 10, 100, "var(--yo)");
let default2 = new OC("Nombre OC", "noOC2", 1, 10, 100, "var(--enemigo)");
let adam = new OC("Adam", "adam", 9, 28, 100, "#e99221"); // Mi detective traumado
let hasani = new OC("Hasani", "hasani", 5, 21, 100, "#296ed6"); // Mago tritón traumado con DID
let kizumi = new OC("Kizumi", "kizumi", 6, 23, 100, "#e699b9"); // Sirena que se está reincorporando a la vida normal en el océano
let melissa = new OC("Melissa", "melissa", 10, 21, 100, "#5d2eb6"); // Asistente del traumado
let varoun = new OC("Varoun", "varoun", 9, 23, 100, "#1f461c"); // Hermano malo del rey del océano
let zaire = new OC("Zaire", "zaire", 8, 26, 100, "#70c0b5"); // Rey del océano que es mestizo de dos especies del océano y básicamente deja que Hasani y Kizumi vivan en el castillo con él

let personajes = [adam, hasani, kizumi, melissa, varoun, zaire];

// Variables
let ini = document.querySelector("#butIn");
let messageLog = document.querySelector("#log");
let gameMode = false;
let nA = document.querySelector(".hab.p12"); // Botón de espacio para celulares, es un gradiente entre el color del jugador 1 y del jugador 2

let nom1 = document.querySelector("#name1")
let hpY = document.querySelector(".pro.u");
hpY.disabled = true;
let p1 = document.querySelector(".personaje.uno");
let p1Char = default1;
let p1S = document.querySelector("#pj1Se");
let oc1S = document.querySelector(".selector.yo");
let habi1 = document.querySelectorAll(".hab.p1");
let hpC1 = document.querySelector(".nHpOc.u")

let nom2 = document.querySelector("#name2")
let hpE = document.querySelector(".pro.d");
hpE.disabled = true;
let p2 = document.querySelector(".personaje.dos");
let p2Char = default2;
let p2S = document.querySelector("#pj2Se");
let oc2S = document.querySelector(".selector.en");
let habi2 = document.querySelectorAll(".hab.p2");
let hpC2 = document.querySelector(".nHpOc.d")

p1S.addEventListener('click', () => {
		oc1S.innerHTML = "";
		for (const x of personajes) {
			let pNew = document.createElement('p');
			let valor = `${x.nombre}<br>Rango de atk: ${x.minATK}-${x.maxATK}<br>`;
			pNew.innerHTML += valor;
			oc1S.appendChild(pNew);
			console.log(`${x.nombre} cargado exitosamente`);
			pNew.addEventListener('click', () => {
					if (p2Char.varName === x.varName) {
						alert("Personaje ocupado")
					} else {
						p1Char = x;
						messageNOC = `<br>Jugador 1 planea jugar con ${x.nombre}`;
						p1.style.backgroundColor = x.color;
						nom1.innerHTML = x.nombre;
						nA.style.backgroundImage = `linear-gradient(90deg, ${p1Char.color}, ${p2Char.color})`;
						for (let hab of habi1) {
							hab.style.backgroundColor = x.color;
						}
						messageLog.innerHTML += messageNOC;
						messageLog.scrollTop = messageLog.scrollHeight;
					}
				}
			)
		}
	}
)

p2S.addEventListener('click', () => {
		oc2S.innerHTML = "";
		//Aquí debe habilitar la muestra y selección de personajes
		for (const x of personajes) {
			let pNew = document.createElement('p');
			let valor = `${x.nombre}<br>Rango de atk: ${x.minATK}-${x.maxATK}<br>`;
			pNew.innerHTML += valor;
			oc2S.appendChild(pNew);
			console.log(`${x.nombre} cargado exitosamente`);
			pNew.addEventListener('click', () => {
					if (p1Char.varName === x.varName) {
						alert("Personaje ocupado")
					} else {
						p2Char = x;
						messageNOC = `<br>Jugador 2 planea jugar con ${x.nombre}`;
						p2.style.backgroundColor = x.color;
						nom2.innerHTML = x.nombre;
						nA.style.backgroundImage = `linear-gradient(90deg, ${p1Char.color}, ${p2Char.color})`;
						for (let hab of habi2) {
							hab.style.backgroundColor = x.color;
						}
						messageLog.innerHTML += messageNOC;
						messageLog.scrollTop = messageLog.scrollHeight;
					}
				}
			)
		}
	}
)

if (!gameMode){
	ini.disabled = false;
	p1S.disabled = false;
	oc1S.disabled = false;
	p1Char.hp = 100;
	p2S.disabled = false;
	oc2S.disabled = false;
	p2Char.hp = 100
}

ini.addEventListener('click', () => {
		if(p1Char === default1 || p2Char === default2){
			alert("Aviso: falta uno o ambos espacios.");
		} else {
			oc1S.innerHTML = "";
			oc2S.innerHTML = "";
			ini.disabled = true;
			p1S.disabled = true;
			oc1S.disabled = true;
			hpC1.innerHTML = p1Char.hp + "/100"
			p2S.disabled = true;
			oc2S.disabled = true;
			hpC2.innerHTML = p2Char.hp + "/100"
			console.log("Iniciando juego");
			gameMode = true;
			if(gameMode){
				game();
			}
		}
	}
);

let turnoActual = null;
let objetivo = null;

function msg(mensaje){
	messageLog.innerHTML += "<br>"
	messageLog.innerHTML += mensaje;
	messageLog.scrollTop = messageLog.scrollHeight;
};

function game(){
	const messageIn = "--HA INICIADO UNA PARTIDA--"
	msg(messageIn);
	hpY.disabled = false;
	console.log(`Habilitando personaje 1: ${p1Char.nombre}`);
	hpE.disabled = false;
	console.log(`Habilitando personaje 2: ${p2Char.nombre}`);
	let messageTur = "Asignando primer turno…";
	turnoIni = Math.floor(Math.random() * 2);
	console.log(turnoIni);
	if(turnoIni === 1){
		messageTur += `El primer turno es de Jugador 1 (${p1Char.nombre})`;
		turnoActual = p1Char;
		objetivo = p2Char;
	} else {
		messageTur += `El primer turno es de Jugador 2 (${p2Char.nombre})`;
		turnoActual = p2Char;
		objetivo = p1Char;
	};
	msg(messageTur);
	msg("Esperando movimiento…");
	msg("Presiona ESPACIO o una tecla de habilidad para atacar…");
};

function lifeUpdate(){
	if(objetivo === p1Char){
		hpC1.innerHTML = p1Char.hp + "/100"
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
	} else {
		hpC2.innerHTML = p2Char.hp + "/100"
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
	}
}

function winCheck(){
	if (p1Char.hp <= 0){
		p1Char.hp = 0;
		msg(`¡${p2Char.nombre} ha ganado!`);
		msg("¡SE HA ACABADO EL JUEGO!");
		gameMode = false;
		ini.disabled = false;
		p1S.disabled = false;
		oc1S.disabled = false;
		p1Char.hp = 100;
		p2S.disabled = false;
		oc2S.disabled = false;
		p2Char.hp = 100
	} else if (p2Char.hp <= 0){
		p2Char.hp = 0;
		msg(`¡${p1Char.nombre} ha ganado!`);
		msg("¡SE HA ACABADO EL JUEGO!");
		gameMode = false;
		ini.disabled = false;
		p1S.disabled = false;
		oc1S.disabled = false;
		p1Char.hp = 100;
		p2S.disabled = false;
		oc2S.disabled = false;
		p2Char.hp = 100
	} else {
		return;
	}
	gameMode = false;
}
  
document.addEventListener('keydown', (ev) => {
		console.log(ev.key);
		if(!gameMode){
			return;
		}
		if(ev.key === ' '){
			console.log("Ataque normal");
			let atk = Math.floor(Math.random() * (turnoActual.maxATK - turnoActual.minATK + 1)) + turnoActual.minATK;
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
		// if (turnoActual === p1Char && ev.key === 'a'){
		// 	return turnoActual.hab1;
		// }
	}
)
