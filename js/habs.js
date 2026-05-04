class Habilidades {
	constructor(nombreH, desc, cd, code){
		this.nombreH = nombreH;
		this.desc = desc;
		this.cd = cd;
		this.currentCd = 0;
		this.code = code;
	}
};

// Akiko
let akikohab1 =  new Habilidades("Sanación de de la flor mágica", "Al usar esta habilidad, Akiko se cura a sí misma con el 20% de su vida", 3, (caster, target) => {
	caster.hp = caster.hp + Math.floor(caster.maxHp * 0.2);
	if (caster.hp > caster.maxHp){
		caster.hp = caster.maxHp;
	};
});

let akikohab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let akikohab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let akikohab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let akikohab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Adam
let adamhab1 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let adamhab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let adamhab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let adamhab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let adamhab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

export {Habilidades, akikohab1, akikohab2, akikohab3, akikohab4, akikohab5, adamhab1, adamhab2, adamhab3, adamhab4, adamhab5};