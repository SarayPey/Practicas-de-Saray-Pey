//
let ini = document.querySelector("#butIn");
let gameMode = false;
let messageLog = document.querySelector("#log")


ini.addEventListener('click', () => {
        ini.disabled = true;
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
}


class OC {
    constructor(nombre, minATK, maxATK, hp, color){
        this.nombre = nombre;
        this.minATK = minATK;
        this.maxATK = maxATK;
        this.hp = 100;
        this.color = color;
    }
}

// Personajes //
let hasani = new OC("Hasani", 10, 54, "#2991d6");

