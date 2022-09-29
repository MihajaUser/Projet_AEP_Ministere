import {Row,Col,Form,Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import  {MdClose}  from 'react-icons/md';
import React, {useRef,useEffect,useCallback} from 'react';
import {useSpring,animated} from 'react-spring';
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

export const AjoutFormulaire = () => {
      return(
        <>
        {(
          <Background>
          <ModalWrapper >
          <ModalContent>
          <Row>
          <Col xs={6} md={4}>
         <Card border="primary" style={{ width: '18rem' }}>
         <Card.Header>Formulaire d'ajout</Card.Header>
         <Card.Body>
         <Card.Title></Card.Title>
            <Form.Group className="mb-3">
            <Form.Label>Option</Form.Label>
             <Form.Select aria-label="Default select example" size="md-6">
             <option>Veuillez choisir</option>
             <option value="1">Réservoir d'eau</option>
             <option value="2">Canalisation</option>
             <option value="3">Pompe</option>
             </Form.Select>
             </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Infrastructure de l'eau</Form.Label>
             <Form.Select aria-label="Default select example" size="md-6">
             <option value="1">AEPG</option>
             <option value="2">AEPP</option>
             <option value="3">AEPPp</option>
             <option value="2">FPMH</option>
             <option value="2">PPMH</option>
             </Form.Select>
             </Form.Group>
             <Form.Group className="mb-3">
            <Form.Label>Point d'eau</Form.Label>
             <Form.Select aria-label="Default select example" size="md-6">
             <option value="1">BF</option>
             <option value="2">BP</option>
             <option value="3">BS</option>
             <option value="2">FPMH</option>
             <option value="2">MONO</option>
             <option value="2">PPMH</option>
             </Form.Select>
             </Form.Group>
             <Form.Group className="mb-3">
              <Form.Label>Région</Form.Label>
                 <Form.Control type="text" placeholder="ex : Alaotra Mangoro" />
             </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>District</Form.Label>
                 <Form.Control type="text" placeholder="ex : Ambatondrazaka" />
             </Form.Group>
             <Form.Group className="mb-3">
             <Form.Label>Commune</Form.Label>
                 <Form.Control type="text" placeholder="ex : Ambandrika" />
             </Form.Group>
             <Form.Group className="mb-3">
             <Form.Label>Fokontany</Form.Label>
                 <Form.Control type="text" placeholder="ex : Ambandrika" />
             </Form.Group>
             <Form.Group className="mb-3">
             <Form.Label>Localité</Form.Label>
                 <Form.Control type="text" placeholder="ex : Ambandrika" />
             </Form.Group>
             <Form.Group className="mb-3">
             <Form.Label>Nombre de construction</Form.Label>
                 <Form.Control type="number" placeholder="Entrez le nombre" />
             </Form.Group>
             <Button type="submit" className="btn">Ajoutez</Button>
             </Card.Body>
             </Card>
         </Col>
         </Row>
         </ModalContent>
         </ModalWrapper>
         </Background>
       ) }
     </>
   );
 };
  
   export default AjoutFormulaire;
