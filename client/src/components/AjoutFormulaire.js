import {Row,Col,Form,Button} from 'react-bootstrap';
// import '../styles/AjoutFormulaire.css'

const AjoutFormulaire= () => {
      return (
        <div className="formulaire">
            <h2>Formulaire d'ajout</h2>
            <Row>
            <Col md={4}>
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
                <Form.Label>Lieu de construction</Form.Label>
                    <Form.Control type="text" placeholder="ex : Antananarivo" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Nombre de construction</Form.Label>
                    <Form.Control type="number" placeholder="Entrez le nombre" />
            </Form.Group>
            <Button type="submit" className="btn">Ajoutez</Button>
            </Col>
            </Row>
            <Row>
            {/* <img src={logo} alt='La maisonjungle' className='lmj-logo' /> */}
            </Row>
        </div>
      )
    }
  
   export default AjoutFormulaire;
