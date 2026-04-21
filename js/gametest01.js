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
let hasani = new OC("Hasani", "hasani", 5, 20, 100, "#296ed6");
let zaire = new OC("Zaire", "zaire", 7, 26, 100, "#70c0b5");
let varoun = new OC("Varoun", "varoun", 9, 23, 100, "#1f461c");

let personajes = [hasani, zaire, varoun];

// Variables
let ini = document.querySelector("#butIn");
let messageLog = document.querySelector("#log");
let gameMode = false;

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
		//Aquí debe habilitar la muestra y selección de personajes
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
						for (let hab of habi1) {
							hab.style.backgroundColor = x.color;
						}
						messageLog.innerHTML += messageNOC;
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
						for (let hab of habi2) {
							hab.style.backgroundColor = x.color;
						}
						messageLog.innerHTML += messageNOC;
					}
				}
			)
		}
	}
)

ini.addEventListener('click', () => {
		if(p1Char === default1 || p2Char === default2){
			alert("Aviso: falta uno o ambos espacios.")
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

function game(){
	const messageIn = "<br>--HA INICIADO UNA PARTIDA--"
	messageLog.innerHTML += messageIn;
	console.log(messageIn);
	hpY.disabled = false;
	console.log(`Habilitando personaje 1: ${p1Char.nombre}`)
	hpE.disabled = false;
	console.log(`Habilitando personaje 2: ${p2Char.nombre}`)
	let messageTur = "<br>Asignando primer turno…";
	turnoIni = Math.floor(Math.random() * 2);
	console.log(turnoIni);
	if(turnoIni === 1){
		messageTur += `<br>El primer turno es de Jugador 1 (${p1Char.nombre})`;
		turnoActual = p1Char;
		objetivo = p2Char;
	} else {
		messageTur += `<br>El primer turno es de Jugador 2 (${p2Char.nombre})`;
		turnoActual = p2Char;
		objetivo = p1Char;
	};
	messageLog.innerHTML += messageTur;
	messageLog.innerHTML += "<br>Esperando movimiento…";
	messageLog.innerHTML += "<br>Presiona ESPACIO o una tecla de habilidad para atacar…";
};

function lifeUpdate(){
	if(objetivo === p1Char){
		hpC1.innerHTML = p1Char.hp + "/100"
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
		if (p1Char.hp > 75){
			hpY.style.backgroundColor = "#00ff00";
		} else if(p1Char.hp <= 75 && p1Char.hp > 50){
			hpE.style.backgroundColor = "#aaff00";
		} else if(p1Char.hp <= 50 && p1Char.hp > 25){
			hpE.style.backgroundColor = "#ffff00"
		} else if(p1Char.hp <= 25 && p1Char.hp > 10){
			hpE.style.backgroundColor = "#ffaa00"
		} else if(p1Char.hp <= 10 && p1Char.hp > 5){
			hpE.style.backgroundColor = "#ff7700"
		} else if(p1Char.hp <= 5 && p1Char.hp > 0){
			hpE.style.backgroundColor = "#ff5500"
		} else if(p1Char.hp <= 0){
			hpE.style.backgroundColor = "#ff0000"
		}
	}
}

function winCheck(){
	if (p1Char.hp <= 0){
		p1Char.hp = 0;
		messageLog += `<br>¡${p2Char.nombre} ha ganado!`;
		messageLog += "<br>¡SE HA ACABADO EL JUEGO!";
	} else {
		p2Char.hp = 0;
		messageLog += `<br>¡${p1Char.nombre} ha ganado!`;
		messageLog += "<br>¡SE HA ACABADO EL JUEGO!";
	}
	gameMode = false;
}
  
document.addEventListener('keydown', (ev) => {
		if(!gameMode){
			return;
		}
		console.log(ev.key);
		if(ev.key === ' '){
			console.log("Ataque normal");
			let atk = Math.floor(Math.random() * turnoActual.maxATK) + turnoActual.minATK;
			objetivo.hp -= atk;
			messageLog.innerHTML += `<br>${turnoActual.nombre} usó ataque normal contra ${objetivo.nombre}.`
			messageLog.innerHTML += `<br>${turnoActual.nombre} atacó con ${atk} de daño`;
			lifeUpdate();
			messageLog.innerHTML += "<br>--HA TERMINADO EL TURNO";
			winCheck;
			if(turnoActual === p1Char){
				turnoActual = p2Char;
				objetivo = p1Char;
				messageLog.innerHTML += `<br>¡Es turno del jugador 2 (${turnoActual.nombre})!`
				messageLog.innerHTML += "<br>Presiona ESPACIO o una tecla de habilidad para atacar…";
			} else {
				turnoActual = p1Char;
				objetivo = p2Char;
				messageLog.innerHTML += `<br>¡Es turno del jugador 1 (${turnoActual.nombre})!`
				messageLog.innerHTML += "<br>Presiona ESPACIO o una tecla de habilidad para atacar…";
			}
		}
	}
)
