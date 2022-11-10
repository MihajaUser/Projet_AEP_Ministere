import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Loading.css'
const Loading = () => {
  return (
    <div>
      <Modal className="LoadingBody" show={true}>
        <Modal.Header className="LoadingHeader" >
          <Spinner animation="border" role="status" style={{ width: "5rem", height: "5rem", color: "rgb(24, 99, 197)" }}>
          </Spinner>
          <h2  >Chargement...</h2>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default Loading;