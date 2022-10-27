import {Row,Col,Table} from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from 'styled-components';
import { CrudService } from './Crud.service.js';
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

function CrudProjet() {
  const [listeProjet , setListeProjet] = useState([]);
  const listeProjets = async () => {
    const response = await CrudService. getAllProjet();
    if(response.status === 200) {
      setListeProjet(response.data);
    }
    else {
      throw new Error("Failed to fetch users");
    }
  };
   useEffect(() => {listeProjets()},[]);
   
  const onClikDelete = async (id) => {
   const response = await CrudService.supprimer(id);
    if(response){
      alert("Projet supprimer");
      listeProjets();
    }
  }
  return (

    <ModalContent>  
    <Row>
     <Col xs={6} > 
     <h4>Liste des projets</h4>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {/* <th>Numéro</th> */}
          <th>Numero  de projet</th>
          <th>Nom  de projet</th>
          <th>Région</th>
          <th>District</th>
          <th>Commune</th>
          <th>Fokontany</th>
          <th>Localité</th>
          <th colSpan="2">Action</th>
        </tr>
      </thead>
      <tbody>
      
          {
            listeProjet.map((item) =>{
              return(
                <tr>
                <td>{item.id}</td>
                <td>{item.utilisation}</td>
                <td>{item.region}</td>
                <td>{item.district}</td>
                <td>{item.commune}</td>
                <td>{item.fokontany}</td>
                <td>{item.localite}</td>
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

export default CrudProjet