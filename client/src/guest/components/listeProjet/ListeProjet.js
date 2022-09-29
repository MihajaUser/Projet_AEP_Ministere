import Table from 'react-bootstrap/Table';
import React from 'react';
import {Link} from 'react-router-dom'
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
          <td><Link to='#'>Projet de Canalisation</Link></td>
          <td>Itaosy</td>
          <td>En cours</td>
        </tr>
        <tr>
          <td>2</td>
          <td><Link to='#'>Installation de Réservoir d'eau</Link></td>
          <td>Andoharanofotsy</td>
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
