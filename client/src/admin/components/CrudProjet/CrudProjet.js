import {Row,Col,Table} from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from 'styled-components';

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
  return (

    <ModalContent>  
    <Row>
     <Col xs={6} > 
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Numéro</th>
          <th>Nom de projet</th>
          <th>Région</th>
          <th>Lieu</th>
          <th colSpan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Canalisation</td>
          <td>Analamanga</td>
          <td>Anosy</td>
          <td><UpdateIcon /></td>
          <td><DeleteOutlineIcon /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Construction de pompe</td>
          <td>Analamanga</td>
          <td>Itaosy</td>
          <td><UpdateIcon /></td>
          <td><DeleteOutlineIcon /></td>
        </tr>
       
      </tbody>
    </Table>
    </Col>
    </Row>
    </ModalContent>
  );
}

export default CrudProjet