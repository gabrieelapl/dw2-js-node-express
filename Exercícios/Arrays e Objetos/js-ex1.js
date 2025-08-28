//Tarefa 1
const listaClientes = [
  {
    nome: "Gabriela",
    endereco: "Rua tananam, 123 - Parafuso",
    cpf: 43710925400,
  },
  {
    nome: "Beatriz",
    endereco: "Rua pipipopo, 234 - Inhuguvira",
    cpf: 89053452324,
  },
  {
    nome: "Isaac",
    endereco: "Rua lalala, 567 - Vila Nova",
    cpf: 65709832452,
  },
];

//Tarefa 2
listaClientes.forEach((Cliente) => {
  document.write(`
        Nome: ${Cliente.nome}<br>
        Endereço: ${Cliente.endereco}<br>
        CPF: ${Cliente.cpf}<br><br>
    `);
});

//Tarefa 3
document.write("<h3>Adicionando um novo cliente ao final do listaCliente com PUSH</h3>");
listaClientes.push({
  nome: "Gabriel",
  endereco: "Rua de tal, 444 - Centro",
  cpf: 12345678900,
});

listaClientes.forEach((Cliente) => {
  document.write(`
        Nome: ${Cliente.nome}<br>
        Endereço: ${Cliente.endereco}<br>
        CPF: ${Cliente.cpf}<br><br>
    `);
});

//Tarefa 4
document.write("<h3>Adicionando um novo cliente ao início do listaCliente com UNSHIFT</h3>");
listaClientes.unshift({
  nome: "José",
  endereco: "Rua tal tal tal, 265 - Bico do Pato",
  cpf: 34512587690,
});

listaClientes.forEach((Cliente) => {
  document.write(`
        Nome: ${Cliente.nome}<br>
        Endereço: ${Cliente.endereco}<br>
        CPF: ${Cliente.cpf}<br><br>
    `);
});
