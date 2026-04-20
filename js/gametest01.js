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

let hpE = document.querySelector(".pro.d");
hpE.disabled = true;
let p2 = document.querySelector(".personaje.dos");
let p2S = document.querySelector("#pj2Se");

let gameMode = false;

p1S.addEventListener('click', () => {
        //Aquí debe habilitar la muestra y selección de personajes
        for (const x of personajes) {
            let valor = document.createElement("div");
            valor.innerHTML = `${x.nombre}<br>Rango de atK: ${x.minATK}-${x.maxATK}`;
            console.log(`${x.nombre} cargado exitosamente`);
            messageNOC = `Jugador 1 planea jugar con ${x.nombre}`;
            messageLog.innerHTML += messageNOC;
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
