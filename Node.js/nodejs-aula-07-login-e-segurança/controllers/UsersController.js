import express from "express";
const router = express.Router();
// Importando o Model de Usuário
import User from "../models/User.js";
//Importando bcrypt
import bcrypt from "bcrypt";

// ROTA de LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

// ROTA de CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// ROTA de CRIAÇÃO de Usuário
router.post("/createUser", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  //vERIFICANDO SE O USUÁRIO JÁ ESTÁ CADASTRADO NO BANCO
  User.findOne({ where: { email: email } }).then((user) => {
    //se o usuário não existir
    if (user == undefined) {
      //Gerando o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // Enviando para o banco
      User.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    //se o usuário existir
    else {
      res.send(
        `O usuário informado já está cadastrado! <br> <a href="/login">Tentar novamente</a>`
      );
    }
  });
});

//rota de autenticação
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //busca o usuário no banco
  User.findOne({ where: { email: email } }).then((user) => {
    //se o usuário existir
    if (user != undefined) {
      //valida a senha
      const correct = bcrypt.compareSync(password, user.password);
      //se a senha for válida
      if (correct) {
        //autoriza o login
        req.session.user ={
          id: user.id,
          email: user.email
        }
        res.send(`O usuário logado é <br> ID: ${req.session.user["id"]} <br> Email: ${req.session.user["email"]}`)
        res.redirect("/");
      }
      //se a senha não for válida
      else {
        res.send(
          `A senha digitada está incorreta! <br> <a href="/login">Tentar novamente</a>`
        );
      }
    } else {
      res.send(
        `O usuário informado não existe! <br> <a href="/login">Tentar novamente</a>`
      );
    }
  });
});

//rota de logout
router.get("/logout", (req, res) => {
  req.session.user = undefined,
  res.redirect = 774,
})
export default router;
