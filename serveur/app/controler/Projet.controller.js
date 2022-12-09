//update
// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

//misy erreur ilay res.send message, milla jerena ilay izy

const { QueryTypes } = require("sequelize");
const model = require("../models");
const controller = {}
exports.message = (req, res, next) => {
  res.status(200).json({ messages: "mihaja antonio" });
}

// exports.getAllProjet = (req, res) => {
//   model.Projets.findAll().then((rep) => { res.status(200).json(rep); });
// };

exports.getAllProjet = (req, res) => {
  console.log('test');
  model.Projets.findAll()
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
//supprimer un projet
exports.supprimer = (req, res) => {
  model.Projets.destroy(
    {where: {id: req.params.id} }
  )
  .then(rep => {
    res.send({ rep })
  }
  )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

//modifier un projet
exports.ModifierProjet = (req, res) =>
{
  console.log("---------------------------------")
  console.log(req.params.id)
  console.log(req.body.etat_ouvrage)
  model.Projets.update({
  
   etat_ouvrage: req.body.etat_ouvrage
   
  }, 
 {
   where:{id: req.params.id}
 })
 .then(rep => {
   res.status(200).send(rep);
 }
 )
   .catch(err => {
     res.status(500).send({ message: err.message });
   }) 
  
};
//detail d'un projet
exports.getById = (req,res) => {
  model.Projets.findOne(
    { where: {id: req.params.id} }
  )
  .then(rep => {
    res.send(rep )
  }
  )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

//nombre projet par region
exports.nbrProjet = (req,res) => {
  model.sequelize.query(
    'SELECT count(*) as y,region as name FROM public."Projets" group by region ',
    {
      type: QueryTypes.SELECT
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
};

//nombre projet en cours
exports.finitionProjet = (req,res) => {
  model.sequelize.query(
    `SELECT count(*) as encours, etat_ouvrage as nom FROM public."Projets"  group by etat_ouvrage`,
    {
      type: QueryTypes.SELECT
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
}
//nombre projet par region en fonction de l'utilisation
//SELECT count(*) as nbrutilisation,utilisation,region FROM public."Projets" group by utilisation,region