import { Row, Col, Table, Modal, Button } from 'react-bootstrap';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from 'styled-components';
import { CrudService } from './../../../service/Crud.service.js';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './style.css'
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
  const [listeProjet, setListeProjet] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const handleClose = () => {
    setShow(false);
  }
  const listeProjets = async () => {
    const response = await CrudService.getAllProjet();
    console.log(response);
    if (response.status === 200) {
      setListeProjet(response.data);
    }
    else {
      throw new Error("Failed to fetch users");
    }
  };
  useEffect(() => { listeProjets() }, []);

  const onClikDelete = (id) => {
    setDeleteId(id);
    setShow(true);
    console.log(deleteId);
  }
  const onClikDeleteId = async (id) => {
    const response = await CrudService.supprimer(deleteId);
    if (response) {
      listeProjets();
    }
    setShow(false)
  }
  return (
    <div className='MyTable'>
      <ModalContent>
        <Row>
          <h2 className='Mytitle'>Liste des projets d'adduction</h2>
          <Table striped bordered hover size="sm">
            <Modal show={show} onHide={handleClose} size="sm-down">
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>Voulez-vous vraiment supprimer?</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={onClikDeleteId}>
                  Oui
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
            <thead>
              <tr>
                {/* <th>Numéro</th> */}
                <th>N°</th>
                <th>Nom</th>
                <th>Région</th>
                <th>Point d'eau</th>
                <th>Infrastructure de l'eau</th>
                <th>Localité</th>
                <th>Nombre bénéficiaire</th>
                <th>Etat d'ouvrage</th>
                <th colSpan="6" >Action</th>
              </tr>
            </thead>
            <tbody>
              {
                listeProjet.map((item) => {
                  return (
                    <tr>
                      <td><a href={`/todoList/${item.id} `}> {item.id}</a></td>
                      <td>{item.utilisation}</td>
                      <td>{item.region}</td>
                      <td>{item.point_eau}</td>
                      <td>{item.infra_eau}</td>
                      <td>{item.localite}</td>
                      <td>{item.nb_beneficiaire}</td>
                      <td>{item.etat_ouvrage}</td>
                      <td colSpan={2}>
                        <input type="checkbox" className='MyCheckbox' />
                      </td>
                      <td colSpan={2}>
                        <Link to={"modifier/" + item.id + "/" + item.latitude + "/" + item.longitude + "/" + item.nb_beneficiaire + "/" + item.etat_ouvrage}>
                          <UpdateIcon />
                        </ Link>
                      </td>
                      <td colSpan={2} onClick={() => onClikDelete(item.id)}>
                        <DeleteOutlineIcon />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Row>
      </ModalContent>
    </div>
  );
}

export default CrudProjet