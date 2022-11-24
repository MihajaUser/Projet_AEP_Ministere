import Table from 'react-bootstrap/Table';
import React from 'react';
import {Link} from 'react-router-dom'
import { CrudService } from './../../../admin/components/CrudProjet/Crud.service';
import { useState, useEffect} from 'react';
import { Pagination } from 'react-bootstrap';
// import {Routes,Route,Switch} from 'react-router-dom';
function ListeProjet(){
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
      <div className="liste">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Numéro de projet</th>
          <th>Nom de projet</th>
          <th>Region</th>
          <th>District</th>
          <th>Commune</th>
          <th>Fokontany</th>
          <th>Localité</th>
          <th>Etat d'ouvrage</th>
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
                <td>{item.etat_ouvrage}</td>
                </tr>
              )
            })
      }
      </tbody>
    </Table>
    </div>
    //   <div className='container p-2'>
    //   <Pagination size='sm'>
    // <Pagination.Item>1</Pagination.Item>
    // <Pagination.Item active>2</Pagination.Item>
    //   <Pagination.Item>3</Pagination.Item>
    //   <Pagination.Item>4</Pagination.Item>
    //   <Pagination.Item>5</Pagination.Item>
    //   </Pagination>
    //   </div>
   );
}

export default ListeProjet;
