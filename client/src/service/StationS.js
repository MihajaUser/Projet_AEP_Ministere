import Axios, * as others from 'axios';
export const getStation = () => {
  const data = Axios.get('http://localhost:8080/api/projet/projets')
  return data;
}
export const getAltitude = async (latitude, longitude) => {
  const data = await Axios.get('https://api.open-elevation.com/api/v1/lookup?locations=' + latitude + ',' + longitude);
  return data;
}


