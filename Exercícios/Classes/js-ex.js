//Criando a classe Herói com os métodos
class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "O herói está correndo!";
  }
  andar() {
    return "O herói está andando!";
  }
  atacar() {
    return "O herói está atacando!";
  }
  defender() {
    return "O herói está defendendo!";
  }
}

//Criando instâncias

//Homem aranha
document.write("<h3>Homem Aranha</h3>");
const homemAranha = new Heroi("Homem Aranha", 100, 70, 50);
document.write(
  `<p>O herói ${homemAranha.nome} tem ${homemAranha.vida} de vida, ${homemAranha.velocidade} de velocidade e ${homemAranha.forca} de força. ${homemAranha.atacar()}</p>`
);

//Atributo adicional
homemAranha.teia = "0";

//Método adicional
homemAranha.sentidoAranha = () => {
  return "O herói detectou perigo!!!!";
};

document.write(`<p>O herói ${homemAranha.nome} recebe ${homemAranha.teia} de teia e não pode soltar teia. ${homemAranha.sentidoAranha()}`)

//Superman
document.write("<h3>Superman</h3>");
const superman = new Heroi("Superman", 70, 80, 60);
document.write(
  `<p>O herói ${superman.nome} tem ${superman.vida} de vida, ${superman.velocidade} de velocidade e ${superman.forca} de força. ${superman.correr()}</p>`
);

//Atributo adicional
superman.podeVoar = "1";

//Método adicional
superman.visaoCalor = () => {
  return "O herói está utilizando sua visão de calor!!!!";
};

document.write(`<p>O herói ${superman.nome} recebe ${superman.podeVoar} e pode voar. ${superman.visaoCalor()}`)

//Batman
document.write("<h3>Batman</h3>");
const batman = new Heroi("Batman", 85, 79, 90);
document.write(
  `<p>O herói ${batman.nome} tem ${batman.vida} de vida, ${batman.velocidade} de velocidade e ${batman.forca} de força. ${batman.defender()}</p>`
);

//Atributo adicional
batman.esconder = "0";

//Método adicional
batman.investigar = () => {
  return "O herói está investigando um crime!!!!";
};

document.write(`<p>O herói ${batman.nome} recebe ${batman.esconder} e não está se escondendo. ${batman.investigar()}`)


