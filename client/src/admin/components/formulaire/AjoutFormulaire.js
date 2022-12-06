import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import React, { useState } from 'react';
import CrudService from '../CrudProjet/Crud.service.js';
import { useParams, useNavigate } from 'react-router-dom';

// import '../styles/AjoutFormulaire.css'
// import styled from 'styled-components';

const Background = styled.div`
  // width: 100%;
  // height: 100%;
  // background: rgba(0, 0, 0, 0.8);
  // position: fixed;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const ModalWrapper = styled.div`
  // width: 300px;
  // height: 500px;
  // box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  // background: #fff;
  // color: #000;
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // position: flex;
  // z-index: 10;
  // margin-bottom:100px;
  // border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export default function AjoutFormulaire() {
  const [error, setError] = useState(null);
  const [succes, setSucces] = useState(null);
  const { urlDebutLat, urlDebutLng } = useParams();
  const [id_utilisateur, setUtilisateur] = useState(0);
  const [utilisation, setUtilisation] = useState('');
  const [infra_eau, setInfra] = useState('');
  const [point_eau, setPointEau] = useState('');
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');
  const [commune, setCommune] = useState('');
  const [fokontany, setFokontany] = useState('');
  const [localite, setLocalite] = useState('');
  const [nb_beneficiaire, setNombre] = useState('');
  const [etat_ouvrage, setOuvrage] = useState('non fonctionnel');
  const navigate = useNavigate();
  // const [id, setId] = useState();
  //maka anle donnee rehetra

  const ajout = async () => {
    let user = JSON.parse(localStorage.getItem('users'));
    //voalohany variable iantsona an'azy any @ back le hoe req.body
    let data = {
      utilisation,
      infra_eau,
      point_eau,
      region,
      district,
      commune,
      fokontany,
      localite,
      latitude: parseFloat(urlDebutLat),
      longitude: parseFloat(urlDebutLng),
      nb_beneficiaire,
      etat_ouvrage,
      utilisation,
      id_utilisateur
    }
    if (nb_beneficiaire == '' || etat_ouvrage == '') {
      setError('remplire tout les champs!')
    } else {
      const response = await CrudService.AjoutProjet(data);
      if (response.status === 200) {
        alert("Projet ajouté avec succès");
      }
      if (nb_beneficiaire == '' || etat_ouvrage == '') {
        setError('Veuillez remplire tout les champs!')
      } else {
        const response = await CrudService.AjoutProjet(data);
        if (response.status === 200) {
          //  alert("Projet ajouté avec succès");
          setSucces("Projet ajouté avec succès");
        }
        else {
          throw new Error("Veuillez taper tous les champs");
        }
      }
    }
    // console.log("cscsdc",data);

    // navigate(`/`);
  }


  return (
    <>
      {(
        <Background>
          <ModalWrapper >
            <ModalContent>
              <Row>
                <Col xs={6} >
                  <Card border="primary" style={{ width: '65rem' }}>
                    <Card.Header>Formulaire d'ajout d'adduction</Card.Header>
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Utilisation</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange={(e) => { setUtilisation(e.target.value) }}>
                              <option>Choisissez</option>
                              <option value="Station">Station</option>
                              <option value="Pompe">Pompe</option>

                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Infrastru d'eau</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange={(e) => { setInfra(e.target.value) }}>
                              <option>Choisissez</option>
                              <option value="aepg">AEPG</option>
                              <option value="aepp">AEPP</option>
                              <option value="aeppp">AEPPp</option>
                              <option value="fpmh">FPMH</option>
                              <option value="ppmh">PPMH</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Point d'eau</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange={(e) => { setPointEau(e.target.value) }}>
                              <option>Choisissez</option>
                              <option value="bf">BF</option>
                              <option value="bf">BP</option>
                              <option value="bs">BS</option>
                              <option value="fpmh">FPMH</option>
                              <option value="mono">MONO</option>
                              <option value="ppmh">PPMH</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Région</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange={(e) => { setRegion(e.target.value) }}>
                              <option>Choisissez</option>
                              <option value="Analamanga">Analamanga</option>
                              <option value="Bongolava">Bongolava</option>
                              <option value="Itasy">Itasy</option>
                              <option value="Vakinakaratra">Vakinakaratra</option>
                              <option value="Diana">Diana</option>
                              <option value="Sava">Sava</option>
                              <option value="Amoron'i Mania">Amoron'i Mania</option>
                              <option value="Atsimo Atsinanana">Atsimo Atsinanana</option>
                              <option value="Haute Matsiatra">Haute Matsiatra</option>
                              <option value="Ihorombe">Ihorombe</option>
                              <option value="Vatovavy Fitovinany">Vatovavy Fitovinany</option>
                              <option value="Betsiboka">Betsiboka</option>
                              <option value="Boeny">Boeny</option>
                              <option value="Melaky">Melaky</option>
                              <option value="Sofia">Sofia</option>
                              <option value="Alaotra Mangoro">Alaotra Mangoro</option>
                              <option value="Analanjirofo">Analanjirofo</option>
                              <option value="Atsinanana">Atsinanana</option>
                              <option value="Androy">Androy</option>
                              <option value="Anosy">Anosy</option>
                              <option value="Atsimo Andrefana">Atsimo Andrefana</option>
                              <option value="Menabe">Menabe</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>District</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange={(e) => { setDistrict(e.target.value) }}>
                              <option>Choisissez</option>
                              <option value="Ambohidratrimo">Ambohidratrimo</option>
                              <option value="Andramasina">Andramasina</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Commune</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange={(e) => { setCommune(e.target.value) }}>
                              <option>Choisissez</option>
                              <option value="Ambato">Ambato</option>
                              <option value="Ambatolampy">Ambatolampy</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Fokontany</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange={(e) => { setFokontany(e.target.value) }}>
                              <option>Choisissez</option>
                              <option value="Ambanimaso">Ambanimaso</option>
                              <option value="Ambato">Ambato</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Localité</Form.Label>
                            <Form.Control type="text" placeholder="ex : Ambandrika" onChange={(e) => { setLocalite(e.target.value) }} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control type="number" placeholder="" value={urlDebutLat} />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control type="number" placeholder="" value={urlDebutLng} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre bénéficiaire</Form.Label>
                        <Form.Control type="number" placeholder="Entrez le nombre" onChange={(e) => { setNombre(e.target.value) }} />
                      </Form.Group>
                      {/* <Form.Group className="mb-3">
                        <Form.Label>Utilisateur</Form.Label>
                        <Form.Control type="nombre" placeholder="Administrateur" />
                      </Form.Group> */}

                      <Button type="submit" className="btn" onClick={ajout}>Ajoutez</Button>
                      {error &&
                        <Alert className='my-input' key='danger' variant='danger'>
                          {error}
                        </Alert>
                      }
                      {succes &&
                        <Alert className='my-input' key='success' variant='success'>
                          {succes}
                        </Alert>
                      }
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </ModalContent>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};


