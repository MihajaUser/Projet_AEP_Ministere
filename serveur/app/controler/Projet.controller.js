// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

//misy erreur ilay res.send message, milla jerena ilay izy

const model = require("../models");

exports.message = (req, res, next) => {
  res.status(200).json({ messages: "mihaja antonio" });
}

exports.getAllProjet = (req, res) => {
  model.Projets.findAll().then((rep) => { res.status(200).json(rep); });
};

exports.AjoutProjet = (req, res) => {
  model.Projets.create({
    id_utilisateur: req.body.id_utilisateur,
    region: req.body.region,
    district: req.body.district,
    commune: req.body.commune,
    fokontany: req.body.fokontany,
    localite: req.body.localite,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    nb_beneficiaire: req.body.nb_beneficiaire,
    point_eau: req.body.point_eau,
    infra_eau: req.body.infra_eau,
    etat_ouvrage: req.body.etat_ouvrage,
    utilisation: req.body.utilisation
  })
    .then(rep => {
      res.send('Projet was registered successfully!')
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.supprimer = (req, res) => {
  model.Projets.destroy({
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