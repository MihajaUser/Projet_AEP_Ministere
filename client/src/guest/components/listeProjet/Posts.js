import React from 'react'
import Table from 'react-bootstrap/Table'; 
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
          <th>District</th>
          <th>Commune</th>
          <th>Fokontany</th>
          <th>Localité</th>
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
    </ul>
  )
}
export default Posts;