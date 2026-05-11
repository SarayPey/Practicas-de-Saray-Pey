import {akikoHab1, akikoHab2, akikoHab3, akikoHab4, akikoHab5,
				adamHab1, adamHab2, adamHab3, adamHab4, adamHab5,
				hasaniHab1, hasaniHab2, hasaniHab3, hasaniHab4, hasaniHab5,
				jacobHab1, jacobHab2, jacobHab3, jacobHab4, jacobHab5,
				kiraHab1, kiraHab2, kiraHab3, kiraHab4, kiraHab5,
				kizumiHab1, kizumiHab2, kizumiHab3, kizumiHab4, kizumiHab5,
				melissaHab1, melissaHab2, melissaHab3, melissaHab4, melissaHab5,
				varounHab1, varounHab2, varounHab3, varounHab4, varounHab5,
				yunHab1, yunHab2, yunHab3, yunHab4, yunHab5,
				zaireHab1, zaireHab2, zaireHab3, zaireHab4, zaireHab5,
				zelieHab1, zelieHab2, zelieHab3, zelieHab4, zelieHab5} from './habs.js';

class OC {
	constructor(nombre, varName, minATK, maxATK, maxHp, color, habs){
		this.nombre = nombre;
		this.varName = varName;
		this.cATK = Math.floor(Math.random() * (maxATK - minATK + 1)) + minATK;
		this.minATK = minATK;
		this.maxATK = maxATK;
		this.maxHp = maxHp;
		this.hp = maxHp;
		this.color = color;
		this.habs = habs;
	}
}

let akiko   = new OC("Akiko", "akiko", 7, 17, 124, "#fcef40", [akikoHab1, akikoHab2, akikoHab3, akikoHab4, akikoHab5]);                // Lobita inmortal
let adam    = new OC("Adam", "adam", 9, 28, 105, "#e99221", [adamHab1, adamHab2, adamHab3, adamHab4, adamHab5]);                       // Detective traumado
let hasani  = new OC("Hasani", "hasani", 7, 22, 100, "#296ed6", [hasaniHab1, hasaniHab2, hasaniHab3, hasaniHab4, hasaniHab5]);         // Mago tritón traumado con DID
let jacob   = new OC("Jacob", "jacob", 12, 27, 97, "#630d0d", [jacobHab1, jacobHab2, jacobHab3, jacobHab4, jacobHab5]);                // Terrícola torturado
let kira    = new OC("Kira", "kira", 10, 26, 110, "#f7da5c", [kiraHab1, kiraHab2, kiraHab3, kiraHab4, kiraHab5]);                      // Amiga de Zelie
let kizumi  = new OC("Kizumi", "kizumi", 6, 24, 100, "#e699b9", [kizumiHab1, kizumiHab2, kizumiHab3, kizumiHab4, kizumiHab5]);         // Sirena reincorporandose al océano
let melissa = new OC("Melissa", "melissa", 10, 23, 100, "#5d2eb6", [melissaHab1, melissaHab2, melissaHab3, melissaHab4, melissaHab5]); // Asistente del detective traumado
let varoun  = new OC("Varoun", "varoun", 9, 23, 100, "#1f461c", [varounHab1, varounHab2, varounHab3, varounHab4, varounHab5]);         // Hermano malo del rey del océano
let yun     = new OC("Yun", "yun", 9, 23, 100, "#2a81bb", [yunHab1, yunHab2, yunHab3, yunHab4, yunHab5]);                              // El guardaespaldas de Zelie
let zaire   = new OC("Zaire", "zaire", 10, 28, 100, "#70c0b5", [zaireHab1, zaireHab2, zaireHab3, zaireHab4, zaireHab5]);               // Rey del océano
let zelie   = new OC("Zelie", "zelie", 12, 26, 90, "#d65797", [zelieHab1, zelieHab2, zelieHab3, zelieHab4, zelieHab5]);                // Sadomasoquista con ICD

// Defecto para el jugador
let default1 = new OC("Nombre OC", "noOC", 1, 10, 100, "var(--yo)", []);
let default2 = new OC("Nombre OC", "noOC2", 1, 10, 100, "var(--enemigo)", []);

export {akiko, adam, hasani, jacob, kira, kizumi, melissa, varoun, yun, zaire, zelie, default1, default2};