let estadoE = ["Neutral", "Feliz", "Triste", "Depresivo", "Molesto", "Enojado", "Insomnio", "Asustado", "Avergonzado", "Halagado", "Dormido", "Muerto"];

class OC {
  constructor(nombre, varNom, nombreC, cumple, edad, estadoEm, estabMent, hambre, energia){
    this.nombre = nombre;
    this.varNom = varNom;
    this.nombreC = nombreC;
    this.cumple = cumple;
    this.edad = edad;
    this.estadoEm = estadoE[estadoEm]; // Estado emocional (index).
    this.estabMent = estabMent; // Estabilidad mental (0 a 100).
    this.hambre = hambre; // 0 a 100.
    this.energia = energia // 0 a 100.
    this.amigos = [];
  };
  mostrarFicha(){
    console.log(`Nombre completo: ${this.nombreC}\nEdad: ${this.edad} (cumpleaños: ${this.cumple})\nEstado actual: ${this.estadoEm}`);
  };
  mostrarStats(){
    console.log(`Estabilidad mental: ${this.estabMent}\nHambre: ${this.hambre}\nEnergía: ${this.energia}`)
  };
  mostrarAmi(){
    if(this.amigos.length === 0){
      console.log(`${this.nombre} no tiene amigos. :c`);
    } else{
      for(let amigo of this.amigos){
        amigo.mostrarFicha();
      };
    }
  };
  mostrarTodo(){
    console.log("------");
    console.log(`--${this.nombre}--`);
    console.log("------");
    console.log("General");
    this.mostrarFicha()
    console.log("------");
    console.log("Stats");
    this.mostrarStats();
    console.log("------");
    console.log("Amigos");
    this.mostrarAmi();
    console.log("------\n");
  };
  cumpleanios(){
    this.edad += 1;
  };
  agregarAmigo(nuAmigo){
    this.amigos.push(nuAmigo);
  };
  borrarAmigo(noAmigo){
    for (var amigos = 0; amigos < this.amigos.length; amigos++) {
      let ami = this.amigos[amigos];
      if(ami.varNom === noAmigo.varNom){
        this.amigos.splice(ami);
        console.log(`${ami.nombre} Ha sido removido de la lista de amigos de ${this.nombre}. </3`);
      };
    }
  };
};

export {OC};