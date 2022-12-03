import React from 'react'
import Table from 'react-bootstrap/Table'; 
import { Link } from 'react-router-dom';
 const Posts = ( { posts, loading}) => {
    if(loading) {
        return <h2>Loading....</h2>
    }
  return ( 
    <ul className="list-group mb-4" >
         <div className="liste">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Numéro de projet</th>
          <th>Nom de projet</th>
          <th>Region</th>
          <th>Point d'eau</th>
          <th>Infrastructure de l'eau</th>
          <th>Localité</th>
          <th>Nombre de bénéficiaire</th>
          <th>Etat d'ouvrage</th>
        </tr>
      </thead>
      <tbody>
      {
            posts.map((item) =>{
              return(
                <tr>
                <td>{item.id}</td>
                <td>{item.utilisation}</td>
                <td>{item.region}</td>
                <td>{item.point_eau}</td>
                <td>{item.infra_eau}</td>
                <td>{item.localite}</td>
                <td>{item.nb_beneficiaire}</td>
                <td>{item.etat_ouvrage}</td>
                </tr>
              )
            })
      }
      </tbody>
        </Table>
        <Link to='listeCanalisation'>Canalisation</Link>
    </div> 
    </ul>
  )
}
export default Posts;