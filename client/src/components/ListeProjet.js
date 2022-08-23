import Table from 'react-bootstrap/Table';
// import {Routes,Route,Switch} from 'react-router-dom';
function ListeProjet(){
    return (
      <div className="liste">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>N°</th>
          <th>Projet</th>
          <th>Lieu</th>
          <th>Etat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Projet de Canalisation</td>
          <td>Itaosy</td>
          <td>En cours</td>
        </tr>
      </tbody>
    </Table>
    </div>
    // <div>
    // <h1>Liste</h1>
    // </div>
  );
}

export default ListeProjet;
