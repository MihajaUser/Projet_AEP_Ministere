//update
const controlerMateriel = require("../controler/Materiel.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/message", controlerMateriel.message)
  //get All Materiel
  app.get("/api/Materiel/Materiels", controlerMateriel.getAllMateriel);
  //post Materiel
  app.post("/api/Materiel/AjoutMateriel", controlerMateriel.AjoutMateriel);

  app.post("/api/Materiel/supprimer", controlerMateriel.supprimer)
}