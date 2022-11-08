const model = require("../models");
const controller = {}
exports.message = (req, res, next) => {
  res.status(200).json({ messages: "mihaja antonio" });
}

exports.getAllTacheAdduction = (req, res) => {
  console.log('test');
  model.TacheAdductions.findAll()
    .then((rep) => {
      res.send(rep);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Misy erreur"
      });
    });
};


exports.AjoutTacheAdduction = (req, res) => {
  model.TacheAdductions.create({
    id_utilisateur: req.body.id_utilisateur,
    nom: req.body.nom,
    etat: req.body.etat

  })
    .then(rep => {
      res.send('TacheAdduction was registered successfully!')
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
//supprimer un TacheAdduction
exports.supprimer = (req, res) => {
  model.TacheAdductions.destroy(
    { where: { id: req.params.id } }
  )
    .then(rep => {
      res.send({ rep })
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

//modifier un TacheAdduction
exports.ModifierTacheAdduction = (req, res) => {
  model.TacheAdductions.update({
    id_utilisateur: req.body.id_utilisateur,
    nom: req.body.nom,
    etat: req.body.etat
  },
    {
      where: { id: req.params.id }
    })
    .then(rep => {
      res.status(200).send(rep);
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    })

};