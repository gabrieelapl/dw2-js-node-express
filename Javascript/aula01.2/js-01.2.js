//FUNÇÃO ANÔNIMA
// function(n1,n2){
//  return n1+n2;
// }

//JAVASCRIPT - DINAMICAMENTE TIPADO

const soma = function (n1, n2) {
  return n1 + n2;
};

document.write(`<p>O resultado da soma é ${soma(8, 7)}</p>`);

const tipo = typeof soma; //mostra qual o tipo de algo
document.write(`${tipo}`);

//ARROW FUNCTION
const dobro = (x) => {
  //X é o parâmetro - os parenteses podem ser ocultados
  //omite a palavra "function" e coloca uma seta (escrita melhorada da função anônima)
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(500)}</p>`);

//ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`); // eval recebe dois numeros um operador e realiza o calculo deles
};
document.write(`<p>O resultado da operação é ${calc(10, "+", 10)}</p>`);

//SIMPLIFICANDO A ARROW FUNCTION COM UM UNICO RETORNO
const calculadora = (num1, operador, num2) =>
  eval(`${num1} ${operador} ${num2}`); // chaves podem ser ocultas quando há um unico retorno

document.write(`<p>O resultado da operação é ${calculadora(10, "-", 10)}</p>`);

//IIFE - Função Imediata (Immediately Invoked Function Expression)
const iife = (function () {
  document.write("<p>Estou sendo executada imediatamente"); //não precisa invocar explicitamente
})();

//IIFE COM PARÂMETRO
const loadUser = (function (user) {
  document.write(
    `<p>Carregando as informações do usuário: <strong>${user}</strong></p>`
  );
})("Gabi");
