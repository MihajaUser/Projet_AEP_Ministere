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
 
  return (

    <ModalContent>  
    <Row>
     <Col xs={6} > 
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {/* <th>Numéro</th> */}
          <th>Nom de projet</th>
          <th>Région</th>
          {/* <th>Lieu</th>
          <th colSpan="2">Action</th> */}
        </tr>
      </thead>
      <tbody>
      
          {
            listeProjet.map((item) =>{
              return(
                <tr>
                <td>{item.region}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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