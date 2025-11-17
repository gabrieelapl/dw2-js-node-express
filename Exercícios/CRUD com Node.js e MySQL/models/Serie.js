import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Serie = connection.define("series", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  temporadas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Serie.sync({ force: false });
export default Serie;
