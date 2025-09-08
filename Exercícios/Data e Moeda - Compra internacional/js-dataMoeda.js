//Exercício 1
document.write("<h3>Exercício 1:</h3>");
const dataAtual = new Date();
document.write(dataAtual);

//Exercício 2
document.write("<h3>Exercício 2:</h3>");
const compra = 266.11;
const compraInternacional = compra.toLocaleString("pt-br", {
  style: "currency",
  currency: "USD",
});

document.write(`<p>Valor da compra em dólar: ${compraInternacional}.</p>`);

//Exercício 3
document.write("<h3>Exercício 3:</h3>");
const compraConvertida = compra / 0.176;
document.write(
  `O valor da compra em real é ${compraConvertida.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}.`
);

//Exercício 4
document.write("<h3>Exercício 4:</h3>");
dataAtual.setDate(dataAtual.getDate() + 12);
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();


const dataEntrega = `${dataAtual.getDate()}/${mes}/${ano}`;

document.write("Data de entrega: " + dataEntrega);
