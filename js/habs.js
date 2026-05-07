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
let akikoHab1 =  new Habilidades("Sanación de de la flor mágica", "Al usar esta habilidad, Akiko se cura a sí misma con el 20% de su vida", 3, (caster, target) => {
	caster.hp += Math.floor(caster.maxHp * 0.2);
	if (caster.hp > caster.maxHp){
		caster.hp = caster.maxHp;
	};
});
let akikoHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let akikoHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let akikoHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let akikoHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Adam
let adamHab1 =  new Habilidades("Bendición de la luna dorada", "Adam recupera el 20% de su vida e inflinge un 5% de daño adicional", 10, (caster, target) => {
	caster.hp += Math.floor(caster.maxHp * 0.2);
	caster.cATK += Math.floor(caster.cATK * 0.05);
	target.hp -= caster.cATK;
	if (caster.hp > caster.maxHp){
		caster.hp = caster.maxHp;
	};
	if(target.hp < 0){
		target.hp = 0;
		return;
	};
});
let adamHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let adamHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let adamHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let adamHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Hasani
let hasaniHab1 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let hasaniHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let hasaniHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let hasaniHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let hasaniHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Jacob
let jacobHab1 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let jacobHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let jacobHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let jacobHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let jacobHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Kizumi
let kizumiHab1 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let kizumiHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let kizumiHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let kizumiHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let kizumiHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Melissa
let melissaHab1 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let melissaHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let melissaHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let melissaHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let melissaHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Varoun
let varounHab1 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let varounHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let varounHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let varounHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let varounHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Yun
let yunHab1 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let yunHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let yunHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let yunHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let yunHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Zaire
let zaireHab1 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let zaireHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let zaireHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let zaireHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let zaireHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

// Zelie
let zelieHab1 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let zelieHab2 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let zelieHab3 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let zelieHab4 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});
let zelieHab5 =  new Habilidades("nombre", "desc", 1, (caster, target) => {});

export {Habilidades, akikoHab1, akikoHab2, akikoHab3, akikoHab4, akikoHab5,
				adamHab1, adamHab2, adamHab3, adamHab4, adamHab5,
				hasaniHab1, hasaniHab2, hasaniHab3, hasaniHab4, hasaniHab5,
				jacobHab1, jacobHab2, jacobHab3, jacobHab4, jacobHab5,
				kizumiHab1, kizumiHab2, kizumiHab3, kizumiHab4, kizumiHab5,
				melissaHab1, melissaHab2, melissaHab3, melissaHab4, melissaHab5,
				varounHab1, varounHab2, varounHab3, varounHab4, varounHab5,
				yunHab1, yunHab2, yunHab3, yunHab4, yunHab5,
				zaireHab1, zaireHab2, zaireHab3, zaireHab4, zaireHab5,
				zelieHab1, zelieHab2, zelieHab3, zelieHab4, zelieHab5};