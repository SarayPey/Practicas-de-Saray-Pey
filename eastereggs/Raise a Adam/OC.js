let estadoEmoci = ['Normal', 'Feliz', 'Triste', 'Enojado', 'Mareado', 'Dormido', 'Inconsciente', 'Muerto', 'Dormido'];
let minimo = -100;
let maximo = 100;
class OC {
    constructor(nombre, varName, color, edad, dia, mes, altura, peso, hambre, energia, estado, estabMent, animo, salud) {
        this.nombre = nombre;
        this.varName = varName;
        this.color = color;
        this.edad = edad;
        this.dia = dia;
        this.mes = mes;
        this.cumpleanios = `${dia}/${mes}`
        this.altura = `${altura}cm`;
        this.peso = `${peso}kg`
        this.hambre = hambre;
        this.energia = energia;
        this.estado = estadoEmoci[estado];
        this.estabMent = estabMent;
        this.animo = animo;
        this.salud = salud;
    }
}

export {OC};