const controlerCanalisation = require("../controler/Canalisation.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/message", controlerCanalisation.message)
  //get All Canalisation
  app.get("/api/canalisation/Canalisations", controlerCanalisation.getAllCanalisation);
  //post Canalisation
  app.post("/api/canalisation/AjoutCanalisation", controlerCanalisation.AjoutCanalisation);
//supprimer une canalisation
  app.delete("/api/canalisation/supprimer/:id", controlerCanalisation.supprimer);
  //maka nbr canalisation 
  app.get("/api/canalisation/nbrCanalisation", controlerCanalisation.nbrCanalisation);
  //modifier une canalisation
  app.put("/api/canalisation/modifier/:id" , controlerCanalisation.modifierCanalisation)
  //projet en cours sy efa vita
app.get("/api/canalisation/projetFini", controlerCanalisation.finitionProjet);
}