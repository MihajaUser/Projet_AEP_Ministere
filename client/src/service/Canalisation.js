import Axios, * as others from 'axios';
export const getCanalisation = () => {
  const data = Axios.get('http://localhost:8080/api/canalisation/Canalisations')
  return data;
}
export const getAltitude = async (latitude, longitude) => {
  const data = await Axios.get('https://api.open-elevation.com/api/v1/lookup?locations=' + latitude + ',' + longitude);
  return data;
}