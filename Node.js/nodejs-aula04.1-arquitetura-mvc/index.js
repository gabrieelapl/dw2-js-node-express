//Importando o Express (framework)
import express from "express"; //ES6 Modules
//const express = require("express"); -> CommonJS Modules

//Iniciando o Express na variável "app"
const app = express();

//Importando os Controllers (onde estão as rotas e onde é tratado as requisições)
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

//Definindo a pasta PUBLIC para Arquivos estáricos
app.use(express.static("public"));

//Definindo o uso das rotas que estão nos controllers
app.use("/",ClientesController)
app.use("/",PedidosController)
app.use("/",ProdutosController)

//Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ -> trata a REQUISIÇÃO / RES -> trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});

//ROTA DE PERFIL
//:user -> é um parâmetro da rota (OBRIGATÓRIO)
//:user? -> é um parâmetro da rota (OPCIONAL)
app.get("/perfil/:user", (req, res) => { //req -> requisição / res -> resposta
  const user = req.params.user;
  res.render("perfil", {
    //Enviando variáveis para a página EJS (html)
    user: user,
  });
});

//Iniciando o servidor http
const port = 8080; // O servidor escutará na porta 8080

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
