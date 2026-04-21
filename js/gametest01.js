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

let nom2 = document.querySelector("#name2")
let hpE = document.querySelector(".pro.d");
hpE.disabled = true;
let p2 = document.querySelector(".personaje.dos");
let p2Char = default2;
let p2S = document.querySelector("#pj2Se");
let oc2S = document.querySelector(".selector.en");
let habi2 = document.querySelectorAll(".hab.p2");

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
			p2S.disabled = true;
			oc2S.disabled = true;
			console.log("Iniciando juego");
			gameMode = true;
			if(gameMode){
				game();
			}
		}
	}
);

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
	let turnoActual = "";
	console.log(turnoIni);
	if(turnoIni === 1){
		messageTur += `<br>El primer turno es de Jugador 1 (${p1Char.nombre})`;
		turnoActual = p1Char;
	} else {
		messageTur += `<br>El primer turno es de Jugador 2 (${p2Char.nombre})`;
		turnoActual = p2Char;
	};
	while(p1Char.hp > 0 || p2Char.hp > 0){
		messageLog.innerHTML += messageTur;
		messageLog.innerHTML += "<br>Esperando movimiento…";
		messageLog.innerHTML += "<br>Presiona ESPACIO o una tecla de habilidad para atacar…";
		document.addEventListener('keydown', (event) => {
				console.log(event.key);
				if(event.key === 'Space'){
					console.log("Ataque normal");
				}
			}
		)
	}
};
