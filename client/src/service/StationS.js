import Axios, * as others from 'axios';


export const getStation = async () => {
  const data = await Axios.get('http://localhost:8080/station')
  return data;
}




