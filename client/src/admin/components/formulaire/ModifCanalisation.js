import { Row, Col, Form, Button ,Alert} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import React, { useState } from 'react';
import CrudCanalService from './../../../service/CrudCanal.service.js';
import { useNavigate, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FormControlUnstyledContext } from '@mui/base';
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

export default function ModifCanalisation()
{
  const { idProjet } = useParams();
  const[etat,setOuvrage] = useState('');
  const navigate = useNavigate();
  const [succes, setSucces] = useState(null);
  // console.log("lat"+urlDebutLat,"long"+urlDebutLng,"finL"+finLat,"finLg"+finLng);
  

  //maka anle donnee rehetra
  const modifier = async () =>
   {
    let data = {
      etat_ouvrage: etat, id:idProjet
    }
    console.log(data);
    const response = await CrudCanalService.modifierCanalisation(data);
    console.log("valiny",response);
    if(response.status === 200) {
      setSucces("Projet modifié avec succès");
     }
     else{
       throw new Error("Veuillez taper tous les champs");
     }
   
  }
  return (
    <>
      {(
        <Background>
          <ModalWrapper >
            <ModalContent>
              <Row>
                <Col xs={6} >
                  <Card border="primary" style={{ width: '20rem' }}>
                    <Card.Header>Modification Canalisation</Card.Header>
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Form.Group className="mb-3">
                        <Form.Label>Etat d'ouvrage</Form.Label>
                        <Form.Select aria-label="Default select example" size="md-6"  onChange ={(e)=>{ setOuvrage (e.target.value) }}>
                            <option>Choisissez</option>
                              <option value="nouveau">Nouveau</option>
                              <option value="en cours">En cours</option>
                              <option value="fini">Fini</option>
                            </Form.Select>
                      </Form.Group>
                      <Button type="submit" className="btn" onClick={modifier}>Modifier</Button>
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


