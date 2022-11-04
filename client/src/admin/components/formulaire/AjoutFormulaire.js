import { Row, Col, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CrudService from '../CrudProjet/Crud.service';
import { useParams } from 'react-router-dom';

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

 export default function  AjoutFormulaireconst (){
  const { urlDebutLat, urlDebutLng } = useParams();
  const [id_utilisateur,setUtilisateur] = useState(0);
  const [utilisation,setUtilisation] = useState('');
  const [infra_eau,setInfra] = useState('');
  const [point_eau,setPointEau] = useState('');
  const [region,setRegion] = useState('');
  const [district,setDistrict] = useState('');
  const [commune,setCommune] = useState('');
  const [fokontany,setFokontany] = useState('');
  const [localite,setLocalite] = useState('');
  const [nb_beneficiaire,setNombre] = useState('');
  const[etat_ouvrage,setOuvrage] = useState('');
  //maka anle donnee rehetra
  const ajout = () =>{
    let user = JSON.parse(localStorage.getItem('users'));
    //voalohany variable iantsona an'azy any @ back le hoe req.body
    let data = {
      utilisation,
      infra_eau, point_eau, region, district, commune, fokontany, localite: localite, latitude: parseFloat(urlDebutLat) , longitude: parseFloat(urlDebutLng) , nb_beneficiaire: nb_beneficiaire, etat_ouvrage: etat_ouvrage, utilisation:utilisation, id_utilisateur: id_utilisateur}
    console.log("cscsdc",data);
    CrudService. AjoutProjet(data);
  }
  return (
    <>
      {(
        <Background>
          <ModalWrapper >
            <ModalContent>
              <Row>
                <Col xs={6} >
                  <Card border="primary" style={{ width: '25rem' }}>
                    <Card.Header>Formulaire d'ajout</Card.Header>
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Utilisationd{"\n"}</Form.Label>
                            
                            <Form.Select aria-label="Default select example" size="md-6" onChange ={(e)=>{ setUtilisation(e.target.value) }}>
                              <option>Veuillez choisir</option>
                              <option value="1">Réservoir d'eau</option>
                              <option value="2">Canalisation</option>
                              <option value="3">Pompe</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Infrastru d'eau</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange ={(e)=>{ setInfra (e.target.value) }}>
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
                            <Form.Select aria-label="Default select example" size="md-6" onChange ={(e)=>{ setPointEau (e.target.value) }}>
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
                            <Form.Control type="text" placeholder="ex : Alaotra Mangoro"   onChange ={(e)=>{ setRegion (e.target.value) }}/>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>District</Form.Label>
                            <Form.Control type="text" placeholder="ex : Ambatondrazaka"  onChange ={(e)=>{ setDistrict (e.target.value)}}/>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Commune</Form.Label>
                            <Form.Control type="text" placeholder="ex : Ambandrika"  onChange ={(e)=>{ setCommune (e.target.value) }}/>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Fokontany</Form.Label>
                            <Form.Control type="text" placeholder="ex : Ambandrika"  onChange ={(e)=>{ setFokontany (e.target.value) }}/>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Localité</Form.Label>
                            <Form.Control type="text" placeholder="ex : Ambandrika"  onChange ={(e)=>{setLocalite (e.target.value) }}/>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                      <Col> 
                      <Form.Group className="mb-3">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type="number" placeholder="" value={urlDebutLat}  />
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
                        <Form.Control type="number" placeholder="Entrez le nombre" onChange ={(e)=>{setNombre (e.target.value) }}/>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Etat d'ouvrage</Form.Label>
                        <Form.Control type="text" placeholder="Entrez le nombre" onChange ={(e)=>{setOuvrage(e.target.value) }}/>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Utilisateur</Form.Label>
                        <Form.Control type="nombre" placeholder="Administrateur" />
                      </Form.Group>
                      <Button type="submit" className="btn" onClick={ajout}>Ajoutez</Button>
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


