import Table from 'react-bootstrap/Table';
import React from 'react';
import {Link} from 'react-router-dom'
import { CrudService } from './../../../admin/components/CrudProjet/Crud.service';
import { useState, useEffect} from 'react';
import Posts from './Posts';
import Pagination from './Pagination';

function ListeProjet(){
  const [posts ,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
 

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)

  const listeProjets = async () => {
    setLoading(true);
    const response = await CrudService. getAllProjet();
    if(response.status === 200) {
     setPosts(response.data);
      setLoading(false);   
    }
    else {
      throw new Error("Failed to fetch users");
    }
  };
  console.log(posts); 
   useEffect(() => {listeProjets()},[]);

  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>
  }
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(posts.length/postsPerPage)



   return(
   <>
   <h2 className='active-link'>Liste des adductions d'eau</h2><Posts posts={currentPosts} loading={loading} />
   <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>


   </>
   );
}

export default ListeProjet;
