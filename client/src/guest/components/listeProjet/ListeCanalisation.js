import React from 'react';
import CrudCanalService from '../../../service/CrudCanal.service';
import { useState, useEffect} from 'react';
import PostsCanal from './PostsCanal';
import Pagination from './Pagination';

function ListeCanalisation(){
  const [postsCanal ,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
 

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)

  const listeProjets = async () => {
    setLoading(true);
    const response = await CrudCanalService. getAllCanalisation();
    if(response.status === 200) {
     setPosts(response.data);
      setLoading(false);   
    }
    else {
      throw new Error("Failed to fetch users");
    }
  };
  console.log(postsCanal); 
   useEffect(() => {listeProjets()},[]);

  if (loading && postsCanal.length === 0) {
    return <h2>Loading...</h2>
  }
  //Get current postsCanal
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsCanal.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(postsCanal.length/postsPerPage)



   return(
   <>
   <h2 className='active-link'>Liste des Canalisations</h2><PostsCanal postsCanal={currentPosts} loading={loading} />
   <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>

   </>
   );
}

export default ListeCanalisation;
