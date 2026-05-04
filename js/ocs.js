import {akikohab1, akikohab2, akikohab3, akikohab4, akikohab5, adamhab1, adamhab2, adamhab3, adamhab4, adamhab5} from './habs.js';

class OC {
	constructor(nombre, varName, minATK, maxATK, maxHp, color, habs){
		this.nombre = nombre;
		this.varName = varName;
		this.minATK = minATK;
		this.maxATK = maxATK;
		this.maxHp = maxHp;
		this.hp = maxHp;
		this.color = color;
		this.habs = habs;
	}
};
let akiko     = new OC("Akiko", "akiko", 7, 17, 124, "#fcef40", [akikohab1, akikohab2, akikohab3, akikohab4, akikohab5]);      // Lobita inmortal
let adam      = new OC("Adam", "adam", 9, 28, 105, "#e99221", [adamhab1, adamhab2, adamhab3, adamhab4, adamhab5]);        // Mi detective traumado
let hasani    = new OC("Hasani", "hasani", 7, 22, 100, "#296ed6", []);    // Mago tritón traumado con DID
let jacob     = new OC("Jacob", "jacob", 12, 27, 94, "#630d0d", []);      // Terrícola torturado
let kizumi    = new OC("Kizumi", "kizumi", 6, 24, 100, "#e699b9", []);    // Sirena que se está reincorporando a la vida normal en el océano
let melissa   = new OC("Melissa", "melissa", 10, 23, 100, "#5d2eb6", []); // Asistente del traumado
let varoun    = new OC("Varoun", "varoun", 9, 23, 100, "#1f461c", []);    // Hermano malo del rey del océano
let yun       = new OC("Yun", "yun", 9, 23, 100, "#2a81bb", []);          // El que garantiza que Zelie no haga algo malo
let zaire     = new OC("Zaire", "zaire", 10, 28, 100, "#70c0b5", []);     // Rey del océano mestizo de dos especies del océano y que deja que Hasani y Kizumi vivan con él
let zelie     = new OC("Zelie", "zelie", 12, 26, 95, "#d65797", []);      // No sé qué decir de ella-

// Defecto para el jugador
let default1 = new OC("Nombre OC", "noOC", 1, 10, 100, "var(--yo)", []);
let default2 = new OC("Nombre OC", "noOC2", 1, 10, 100, "var(--enemigo)", []);

export {akiko, adam, hasani, jacob, kizumi, melissa, varoun, yun, zaire, zelie, default1, default2};