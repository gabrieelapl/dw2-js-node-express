import express from "express";
import Serie from "../models/Serie.js";

const router = express.Router();

router.get("/", (req, res) => {
  Serie.findAll()
    .then((series) => {
      res.render("series", {
        series: series,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/series/new", (req, res) => {
  const nome = req.body.nome;
  const genero = req.body.genero;
  const temporadas = req.body.temporadas;
  Serie.create({
    nome: nome,
    genero: genero,
    temporadas: temporadas,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/series/delete/:id", (req, res) => {
  const id = req.params.id;
  Serie.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/series/edit/:id", (req, res) => {
  const id = req.params.id;
  Serie.findByPk(id).then(function (serie) {
    res.render("seriesEdit", {
      serie: serie,
    });
  }).catch((err) => {
    console.log(err);
  });
});

router.post("/series/update/:id", (req, res) => {
    const id = req.params.id;
  const nome = req.body.nome;
  const genero = req.body.genero;
  const temporadas = req.body.temporadas;
  Serie.update(
    {
    nome: nome,
    genero: genero,
    temporadas: temporadas,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/series");
  }).catch((err) => {
    console.log(err);
  });
});
export default router;