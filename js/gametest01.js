class OC {
	constructor(nombre, varName, minATK, maxATK, maxHp, color){
		this.nombre = nombre;
		this.varName = varName;
		this.minATK = minATK;
		this.maxATK = maxATK;
		this.maxHp = maxHp;
		this.hp = maxHp;
		this.color = color;
	}
};

// Personajes //
let akiko     = new OC("Akiko", "akiko", 7, 17, 124, "#fcef40");      // Lobita inmortal
let adam      = new OC("Adam", "adam", 9, 28, 105, "#e99221");        // Mi detective traumado
let hasani    = new OC("Hasani", "hasani", 7, 22, 100, "#296ed6");    // Mago tritón traumado con DID
let jacob     = new OC("Jacob", "jacob", 12, 27, 94, "#630d0d");      // Terrícola torturado
let kizumi    = new OC("Kizumi", "kizumi", 6, 24, 100, "#e699b9");    // Sirena que se está reincorporando a la vida normal en el océano
let melissa   = new OC("Melissa", "melissa", 10, 23, 100, "#5d2eb6"); // Asistente del traumado
let varoun    = new OC("Varoun", "varoun", 9, 23, 100, "#1f461c");    // Hermano malo del rey del océano
let yun       = new OC("Yun", "yun", 9, 23, 100, "#2a81bb");          // El que garantiza que Zelie no haga algo malo
let zaire     = new OC("Zaire", "zaire", 10, 28, 100, "#70c0b5");     // Rey del océano mestizo de dos especies del océano y que deja que Hasani y Kizumi vivan con él
let zelie     = new OC("Zelie", "zelie", 12, 26, 95, "#d65797");      // No sé qué decir de ella-

// Defecto para el jugador
let default1 = new OC("Nombre OC", "noOC", 1, 10, 100, "var(--yo)");
let default2 = new OC("Nombre OC", "noOC2", 1, 10, 100, "var(--enemigo)");

let personajes = [akiko, adam, hasani, jacob, kizumi, melissa, varoun, yun, zaire, zelie];

// Variables
let ini = document.querySelector("#butIn");
let messageLog = document.querySelector("#log");
let gameMode = false;

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

p1S.addEventListener('click', () => {
	oc1S.innerHTML = "";
	for (const x of personajes) {
		let pNew = document.createElement('p');
		let valor = `${x.nombre}<br>Rango de atk: ${x.minATK}-${x.maxATK} | HP: ${x.maxHp}<br>`;
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
});

p2S.addEventListener('click', () => {
	oc2S.innerHTML = "";
	//Aquí debe habilitar la muestra y selección de personajes
	for (const x of personajes) {
		let pNew = document.createElement('p');
		let valor = `${x.nombre}<br>Rango de atk: ${x.minATK}-${x.maxATK} | HP: ${x.maxHp}<br>`;
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
			game();
		}
	}
});

let turnoActual = null;
let objetivo = null;

function basicG(){
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
};

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
	msg("Asignando primer turno…");
	turnoIni = Math.floor(Math.random() * 2);
	console.log(turnoIni);
	if(turnoIni === 1){
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
	if(objetivo === p1Char){
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
	} else {
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
	}
};

function winCheck(){
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
	if(!gameMode){
		return;
	}
		basicG()
	}

	// if (turnoActual === p1Char && ev.key === 'a'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab1;
	// }
	// if (turnoActual === p1Char && ev.key === 'w'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab2;
	// }
	// if (turnoActual === p1Char && ev.key === 's'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab3;
	// }
	// if (turnoActual === p1Char && ev.key === 'a'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab4;
	// }
	// if (turnoActual === p1Char && ev.key === 'c'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab5;
	// }

	// if (turnoActual === p2Char && ev.key === 'n'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab1;
	// }
	// if (turnoActual === p2Char && ev.key === 'j'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab2;
	// }
	// if (turnoActual === p2Char && ev.key === 'o'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab3;
	// }
	// if (turnoActual === p2Char && ev.key === 'i'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab4;
	// }
	// if (turnoActual === p2Char && ev.key === 'm'){
	// if(!gameMode){
	// 	return;
	// }
	// 	return turnoActual.hab5;
	// }
});

nA.addEventListener('click', () => {
	if(!gameMode){
		return;
	}
	basicG()
});
