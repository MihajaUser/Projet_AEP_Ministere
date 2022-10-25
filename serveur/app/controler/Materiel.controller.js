//update
// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

//misy erreur ilay res.send message, milla jerena ilay izy

const model = require("../models");

exports.message = (req, res, next) => {
  res.status(200).json({ messages: "mihaja antonio" });
}

exports.getAllMateriel = (req, res) => {
  model.Materiel.findAll().then((rep) => { res.status(200).json(rep); });
};

exports.AjoutMateriel = (req, res) => {
  model.Materiel.create({
    nom: req.body.nom,
    nombre: req.body.nombre,
    type: req.body.type
  })
    .then(rep => {
      res.send('Materiel was registered successfully!')
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.supprimer = (req, res) => {
  model.Materiel.destroy({
    where: {
      id: req.body.id
    }
  }).then(rep => {
    res.send('delete successfully!')
  }
  )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}