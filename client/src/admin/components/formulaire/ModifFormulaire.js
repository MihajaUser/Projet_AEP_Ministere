import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CrudService from './../../../service/Crud.service.js';
import { useParams } from 'react-router-dom';
import './styles.css'

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


export default function ModifFormulaire() {
  const { latitude, longitude, idProjet, nb_beneficiaire, etat_ouvrage } = useParams();
  const [actuel, setActuel] = useState('');
  const params = useParams();
  const [id_utilisateur, setUtilisateur] = useState(0);
  const [utilisation, setUtilisation] = useState('');
  const [infra_eau, setInfra] = useState('');
  const [point_eau, setPointEau] = useState('');
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');
  const [commune, setCommune] = useState('');
  const [fokontany, setFokontany] = useState('');
  const [localite, setLocalite] = useState('');
  const [lat, setLat] = useState(latitude);
  const [long, setLong] = useState(longitude);
  const [nb, setNombre] = useState(nb_beneficiaire);
  const [etat, setOuvrage] = useState(etat_ouvrage);
  //maka anle donnee rehetra

  const getDetailProjet = async () => {
    // console.log("TEST");
    const resultat = await CrudService.getById(idProjet);
    setActuel(resultat.data);
    //  console.log(actuel.data.rep.region);


    // }

  };
  useEffect(() => {
    getDetailProjet()
  }, []);
  console.log("testsefcszc", actuel);

  let data = {
    utilisation,
    infra_eau,
    point_eau,
    region,
    district,
    commune,
    fokontany,
    localite,
    lat,
    long,
    nb,
    etat,
    utilisation,
    id_utilisateur
  }
  console.log("midira aloha ato ", data);


  const mofidier = async () => {
    const response = await CrudService.ModifierProjet(data);
    console.log(response);
    if (response.status === 200) {
      alert("Modifiez avec succès");
    }
    else {
      throw new Error("Veuillez taper tous les champs");
    }

  }
  return (
    <>

      {(
        <div className='MyFormulaire'>
          <Background>
            <ModalWrapper >
              <ModalContent>
                <Row>
                  <Col xs={6} >
                    <Card border="primary" style={{ width: '65rem' }}>
                      <Card.Header>Modification d'adduction</Card.Header>
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Row>
                          <Col>
                            <Form.Group>
                              <Form.Label>Utilisation</Form.Label>
                              <Form.Select aria-label="Default select example" size="md-6" value={actuel.utilisation} onChangeText={(e) => { setUtilisation(e.target.value) }}>
                                <option>Veuillez choisir</option>
                                <option value="1">Réservoir d'eau</option>
                                <option value="2">Pompe</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Label>Infrastru d'eau</Form.Label>
                              <Form.Select aria-label="Default select example" size="md-6" value={actuel.infra_eau} onChangeText={(e) => { setInfra(e.target.value) }}>
                                <option value="1">AEPG</option>
                                <option value="2">AEPP</option>
                                <option value="3">AEPPp</option>
                                <option value="2">FPMH</option>
                                <option value="2">PPMH</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Label>Point d'eau</Form.Label>
                              <Form.Select aria-label="Default select example" size="md-6" value={actuel.point_eau} onChangeText={(e) => { setPointEau(e.target.value) }}>
                                <option value="1">BF</option>
                                <option value="2">BP</option>
                                <option value="3">BS</option>
                                <option value="2">FPMH</option>
                                <option value="2">MONO</option>
                                <option value="2">PPMH</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Label>Région</Form.Label>
                              <Form.Select aria-label="Default select example" size="md-6" value={actuel.region} onChange={(e) => { setRegion(e.target.value) }}>
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
                              <Form.Select aria-label="Default select example" size="md-6" value={actuel.district} onChange={(e) => { setDistrict(e.target.value) }}>
                                <option>Choisissez</option>
                                <option value="Ambohidratrimo">Ambohidratrimo</option>
                                <option value="Andramasina">Andramasina</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Label>Commune</Form.Label>
                              <Form.Select aria-label="Default select example" size="md-6" value={actuel.commune} onChange={(e) => { setCommune(e.target.value) }}>
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
                              <Form.Select aria-label="Default select example" size="md-6" value={actuel.fokontany} onChange={(e) => { setFokontany(e.target.value) }}>
                                <option>Choisissez</option>
                                <option value="Ambanimaso">Ambanimaso</option>
                                <option value="Ambato">Ambato</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Label>Localité</Form.Label>
                              <Form.Control type="text" placeholder="ex : Ambandrika" value={actuel.localite} onChangeText={(e) => { setLocalite(e.target.value) }} />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Label>Latitude</Form.Label>
                              <Form.Control type="number" placeholder="" value={lat} onChange={(e) => { setLat(e.target.value) }} />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Label>Longitude</Form.Label>
                              <Form.Control type="number" placeholder="" value={longitude} />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className="mb-3">
                          <Form.Label>Nombre bénéficiaire</Form.Label>
                          <Form.Control type="number" placeholder="Entrez le nombre" value={nb} onChange={(e) => { setNombre(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Etat d'ouvrage</Form.Label>
                          <Form.Control type="text" placeholder="Entrez le nombre" value={etat} onChange={(e) => { setOuvrage(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Utilisateur</Form.Label>
                          <Form.Control type="nombre" placeholder="Administrateur" value={actuel.id_utilisateur} />
                        </Form.Group>
                        <Button type="submit" className="btn" onClick={mofidier}>Modifier</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </ModalContent>
            </ModalWrapper>
          </Background>
        </div>
      )}
    </>
  );
};