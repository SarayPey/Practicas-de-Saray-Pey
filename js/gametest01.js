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
let hasani = new OC("Hasani", "hasani", 5, 20, 100, "#296ed6");
let zaire = new OC("Zaire", "zaire", 7, 26, 100, "#70c0b5");

let personajes = [hasani, zaire];

//
let ini = document.querySelector("#butIn");
let messageLog = document.querySelector("#log");

let hpY = document.querySelector(".pro.u");
hpY.disabled = true;
let p1 = document.querySelector(".personaje.uno");
let p1S = document.querySelector("#pj1Se");
let oc1S = document.querySelector(".selector.yo");
let habi1 = document.querySelectorAll(".hab.p1");

let hpE = document.querySelector(".pro.d");
hpE.disabled = true;
let p2 = document.querySelector(".personaje.dos");
let p2S = document.querySelector("#pj2Se");
let oc2S = document.querySelector(".selector.en");
let habi2 = document.querySelector(".hab.p2");

let gameMode = false;

p1S.addEventListener('click', () => {
        oc1S.innerHTML  =""
        //Aquí debe habilitar la muestra y selección de personajes
        for (const x of personajes) {
            let pNew = document.createElement('p');
            let valor = `${x.nombre}<br>Rango de atk: ${x.minATK}-${x.maxATK}<br>`;
            pNew.innerHTML += valor;
            oc1S.appendChild(pNew);
            console.log(`${x.nombre} cargado exitosamente`);
            pNew.addEventListener('click', () => {
                    messageNOC = `<br>Jugador 1 planea jugar con <b>${x.nombre}</b>`;
                    p1.style.backgroundColor = x.color;
                    for (let hab of habi1) {
                        hab.style.backgroundColor = x.color;
                    }                    messageLog.innerHTML += messageNOC;
                }
                //Buscando la forma para hacer que tenga una forma de seleccionar a un personaje
            )
        }
    }
)

ini.addEventListener('click', () => {
        ini.disabled = true;
        p1S.disabled = true;
        p2S.disabled = true;
        console.log("Iniciando juego");
        gameMode = true;
        if(gameMode){
            game();
        }
    }
);

function game(){
    const messageIn = "<br>--HA INICIADO UNA PARTIDA--"
    messageLog.innerHTML += messageIn;
    console.log(messageIn);
    hpY.disabled = false;
    console.log(`Habilitando personaje 1`)
    hpE.disabled = false;
}
