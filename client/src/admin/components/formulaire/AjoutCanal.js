import { Row, Col, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import React, { useState } from 'react';
import CrudCanalService from './../../../service/CrudCanal.service.js';
import { useNavigate, useParams} from 'react-router-dom';

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
  const { urlDebutLat, urlDebutLng } = useParams();
  const { finLat, finLng } = useParams();
  const [id_utilisateur,setUtilisateur] = useState(0);
  const [debutLocalite,setDebLocal] = useState('');
  const [finLocalite,setFinLocal] = useState('');
  const [debutLatitude,setDebLat] = useState(urlDebutLat);
  const [debutLongitude,setDebLng] = useState(urlDebutLng);
  const [finLatitude,setFinLat] = useState(finLat);
  const [finLongitude,setFinLng] = useState(finLng);
  const navigate = useNavigate();
  // console.log("lat"+urlDebutLat,"long"+urlDebutLng,"finL"+finLat,"finLg"+finLng);
  

  //maka anle donnee rehetra
  const ajout = async () =>{
    // let user = JSON.parse(localStorage.getItem('users'));
    // //voalohany variable iantsona an'azy any @ back le hoe req.body
    let data = {
      id_utilisateur,
      debutLocalite, 
      finLocalite, 
      debutLatitude, 
      debutLongitude, 
      finLatitude, 
      finLongitude,
    }
    console.log("data",data);
    const response = await CrudCanalService. AjoutCanalisation(data);
    console.log(response);
    if(response.status === 200) {
      
     alert("Projet ajouté avec succès");
    }

    else{
      throw new Error("Veuillez taper tous les champs");
    }
    // navigate('/admin/ajoutCanalisation3/',{state : {debutLatitude,debutLongitude,finLatitude,finLongitude}});
    navigate(`/admin`);
  }
  return (
    <>
      {(
        <Background>
          <ModalWrapper >
            <ModalContent>
              <Row>
                <Col xs={6} >
                  <Card border="primary" style={{ width: '35rem' }}>
                    <Card.Header>Formulaire d'ajout de Canalisation</Card.Header>
                    <Card.Body>
                      <Card.Title></Card.Title>
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


