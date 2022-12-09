import React from 'react'
import Table from 'react-bootstrap/Table'; 
import { Link } from 'react-router-dom';
 const PostsCanal = ( { postsCanal, loading}) => {
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
          <th>Constructions</th>
          <th>Région</th>
          <th>District</th>
          <th>Début de Localité</th>
          <th>Fin de Localité</th>
          <th>Etat d'ouvrage</th>
        </tr>
      </thead>
      <tbody>
      {
            postsCanal.map((item) =>{
              return(
                <tr>
                <td>{item.id}</td>
                <td>{item.nom}</td>
                <td>{item.construction}</td>
                <td>{item.region}</td>
                <td>{item.district}</td>
                <td>{item.debutLocalite}</td>
                <td>{item.finLocalite}</td>
                <td>{item.etat_ouvrage}</td>
                </tr>
              )
            })
      }
      </tbody>
        </Table>
    </div> 
    </ul>
  )
}
export default PostsCanal;