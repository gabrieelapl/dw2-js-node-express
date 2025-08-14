//EXERCÍCIO 1
const user = "Gabriela Lino";

function saudacaoPersonalizada(user) {
  document.write(`<h3>Olá, ${user}! Bem-vindo(a) à Calculadora Universal!</h3>`);
}
saudacaoPersonalizada(user);

//EXERCÍCIO 2
const operacaoMatematica = (num1, operador, num2) =>
eval(`${num1} ${operador} ${num2}`);

const num1 = 10;
const operador = "-";
const num2 = 10;

document.write(`<p>O resultado de ${num1} ${operador} ${num2} é ${operacaoMatematica(num1, operador, num2)}</p>`);

//EXERCÍCIO 3
const calcularDobro = function (num) {
  return num * 2;
};

document.write(`<p>O dobro é ${calcularDobro(4)}</p>`);

//EXERCÍCIO 4
const calcularMetade = x => {
  return x / 2;
};
document.write(`<p>A metade do número é ${calcularMetade(500)}</p>`);

//EXERCÍCIO 5
const iife = (function () {
  document.write("<p><strong>Calculadora Universal pronta para uso!</strong></p>"); 
})();


