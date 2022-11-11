import {Row,Col,Table} from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from 'styled-components';
import { CrudCanalService } from './../../../service/CrudCanal.service.js';
import { useState, useEffect} from 'react';
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

function CrudCanal() {
  const [listeProjet , setListeProjet] = useState([]);
  const listeProjets = async () => {
    const response = await CrudCanalService. getAllCanalisation();
    if(response.status === 200) {
      setListeProjet(response.data);
    }
    else {
      throw new Error("Failed to fetch users");
    }
  };
   useEffect(() => {listeProjets()},[]);
   
  const onClikDelete = async (id) => {
   const response = await CrudCanalService.supprimer(id);
    if(response){
      alert("Projet supprimer");
      listeProjets();
    }
  }
  return (

    <ModalContent>  
    <Row>
     <Col xs={16} > 
     <h4>Liste des projets de Canalisation</h4>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Numero  de projet</th>
          <th>Début de localité</th>
          <th>Fin de localité</th>
          <th colSpan="2">Action</th>
        </tr>
      </thead>
      <tbody>
      
          {
            listeProjet.map((item) =>{
              return(
                <tr>
                <td>{item.id}</td>
                <td>{item.debutLocalite}</td>
                <td>{item.finLocalite}</td>
                <td><UpdateIcon /></td>
                <td onClick={() => onClikDelete(item.id)}><DeleteOutlineIcon /></td>
                </tr>
              )
            })
          }
        
       
      </tbody>
    </Table>
    </Col>
    </Row>
    </ModalContent>
  );
}

export default CrudCanal;