import Axios, * as others from 'axios';
export const getTacheAdduction = () => {
  const data = Axios.get('http://localhost:8080/api/tacheAdduction/TacheAdductions')
  return data;
}

export const addTacheAdduction = () => {
  const data = Axios.post('http://localhost:8080/api/tacheAdduction/AjoutTacheAdduction')
  return data;
}



