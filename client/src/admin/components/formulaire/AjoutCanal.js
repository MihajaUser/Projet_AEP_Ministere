import { Row, Col, Form, Button ,Alert} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import React, { useState } from 'react';
import CrudCanalService from './../../../service/CrudCanal.service.js';
import { useNavigate, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom'
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

 export default function  AjoutCanal (){
  const [error, setError] = useState(null);
  const [succes, setSucces] = useState(null);
  const { urlDebutLat, urlDebutLng } = useParams();
  const { finLat, finLng } = useParams();
  const [id_utilisateur, setUtilisateur] = useState(0);
  const [nom, setNom] = useState('');
  const [construction, setConstruction] = useState('');
  const [region,setRegion] = useState('');
  const [district,setDistrict] = useState('');
  const [commune,setCommune] = useState('');
  const [debutLocalite,setDebLocal] = useState('');
  const [finLocalite,setFinLocal] = useState('');
  const [debutLatitude,setDebLat] = useState(urlDebutLat);
  const [debutLongitude,setDebLng] = useState(urlDebutLng);
  const [finLatitude,setFinLat] = useState(finLat);
  const [finLongitude,setFinLng] = useState(finLng);
  const[etat_ouvrage,setOuvrage] = useState('non fonctionnel');
  const navigate = useNavigate();
  // console.log("lat"+urlDebutLat,"long"+urlDebutLng,"finL"+finLat,"finLg"+finLng);
  

  //maka anle donnee rehetra
  const ajout = async () =>{
    // let user = JSON.parse(localStorage.getItem('users'));
    // //voalohany variable iantsona an'azy any @ back le hoe req.body
    let data = {
      id_utilisateur,
      nom,
      construction,
      region,
      district,
      commune,
      debutLocalite, 
      finLocalite, 
      debutLatitude, 
      debutLongitude, 
      finLatitude, 
      finLongitude,
      etat_ouvrage
    }
    if ( nom == '' || construction == '') {
      setError('Veuillez remplire tout les champs!')
    } else {
      const response = await CrudCanalService. AjoutCanalisation(data);
      console.log(response);
      if(response.status === 200) {
       
        setSucces("Projet ajouté avec succès");
      }
  
      else{
        throw new Error("Veuillez taper tous les champs");
      }
      navigate(`/admin/ajoutCanalisation3/${debutLatitude}/${debutLongitude}/${finLatitude}/${finLongitude}`);
      // navigate(`/admin`);
    }
   
  }
  return (
    <>
      {(
        <Background>
          <ModalWrapper >
            <ModalContent>
              <Row>
                <Col xs={6}>
                  <Card border="primary" style={{ width: '50rem' , height:'35rem'}}>
                    <Card.Header>Formulaire d'ajout de Canalisation</Card.Header>
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Row>
                        <Col xs={8}>
                          <Form.Label>Nom de projet</Form.Label>
                          <Form.Control type="text" placeholder="" onChange ={(e)=>{ setNom (e.target.value) }}/>
                        </Col>
                        <Col xs={4}>
                          <Form.Label>Nombre de constructions</Form.Label>
                          <Form.Control type="number" placeholder="" onChange ={(e)=>{ setConstruction(e.target.value) }}/>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Région</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange ={(e)=>{ setRegion (e.target.value) }} >
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
                            <Form.Select aria-label="Default select example" size="md-6" onChange ={(e)=>{ setDistrict (e.target.value)}}>
                            <option>Choisissez</option>
                              <option value="Ambohidratrimo">Ambohidratrimo</option>
                              <option value="Andramasina">Andramasina</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Commune</Form.Label>
                            <Form.Select aria-label="Default select example" size="md-6" onChange ={(e)=>{ setCommune (e.target.value) }}>
                            <option>Choisissez</option>
                              <option value="Ambato">Ambato</option>
                              <option value="Ambatolampy">Ambatolampy</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Début de localité</Form.Label>
                            <Form.Control type="text" placeholder="ex : Antanimena" onChange ={(e)=>{ setDebLocal(e.target.value) }} />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Début de latitude</Form.Label>
                            <Form.Control type="text" value={debutLatitude}  />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Début de longitude</Form.Label>
                            <Form.Control type="text" value={debutLongitude}  />
                            </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                      <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Fin de localité</Form.Label>
                            <Form.Control type="text" placeholder="ex : Behoririka" onChange ={(e)=>{ setFinLocal(e.target.value) }} />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Fin de latitude</Form.Label>
                            <Form.Control type="text" value={finLatitude} />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Fin de longitude</Form.Label>
                            <Form.Control type="text" value={finLongitude} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button type="submit" className="btn" onClick={ajout}>Ajoutez</Button>
                      <Row>
                        <Col>
                          {error &&
                            <Alert className='my-input' key='danger' variant='danger' >
                                    {error}
                            </Alert>
                          }
                        </Col>
                        <Col>
                        {succes &&
                            <Alert className='my-input' key='success' variant='success'>
                                    {succes}
                            </Alert>
                        }
                        </Col>
                    
                      </Row>
                     
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


