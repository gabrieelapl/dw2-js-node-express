//VARIÁVEIS PODEM SER DECLARADAS DE TRÊS FORMAS
//VAR, LET e CONST
//VAR -> EVITAR O USO, POIS PODE NÃO SER MUITO SEGURO
//LET -> UTILIZAR QUANDO FOR NECESSÁRIO REATRIBUIR O VALOR DA VARIÁVVEL
//CONST -> NÃO É POSSÍVEL REATRIBUIR O VALOR

// var nome = "Gabriela"
// var nome = "Maria"
// let cidade = "Cajati"
// let cidade = "Pariquera" NÃO PODE
// let endereco
// endereco = "Rua tananan"
//const idade NÃO PODE
// const idade = 18
// idade = 20 NÃO PODE

//TIPOS DE FUNÇÕES

//FUNÇÃO SIMPLES
const message = "<h2>Olá! Bem vindo! Essa é sua primeira função.</h2>";

function showMessage() {
  document.write(message);
}

//Invocando a função:
showMessage();

//FUNÇÃO COM PARÂMETROS
const user = "Gabriela Lino";

function userMessage(user) {
  // <- (user) = Parâmetro, não precisa ser do mesmo nome da variável
  document.write(`<h3>O que deseja fazer hoje, ${user} ?</h3>`);
}
//${} -> Template strings / Literal strings
//É usado para inserir variáveis dentro de strings (aspas)

userMessage(user); //argumento - o que é enviado p função

//FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 10;

function mult() {
  let result = n1 * n2;
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}`);
}
mult(n1, n2);

//FUNÇÃO COM RETORNO
const num1 = 1000;
const num2 = 5;

function div(num1, num2) {
  return num1 / num2;
}
document.write(
  `<p>A divisão de ${num1} e por ${num2} é igual a ${div(num1, num2)}</p>`
);

//FUNÇÃO COM DIFERENTES RETORNOS
const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return `par`;
  } else {
    return `impar`;
  }
}
document.write(
  `<p>O número ${number} é <strong>${parImpar(number)}</strong></p>`
);
