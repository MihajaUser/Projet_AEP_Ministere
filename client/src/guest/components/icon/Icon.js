import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function iconRobinet() {
  return (
    new L.Icon({
      iconUrl: require('../../assets/imagesClient/robinet_bleu.png'),
      iconSize: [38, 60],
      shadowSize: [50, 64]
    }))
}

export function iconStation() {
  return (
    new L.Icon({
      iconUrl: require('../../assets/imagesClient/station_rouge.png'),
      iconSize: [38, 60],
      shadowSize: [50, 64]
    }))
}
export function iconMaison() {
  return (
    new L.Icon({
      iconUrl: require('../../assets/imagesClient/maison_rouge.png'),
      iconSize: [50, 60],
      shadowSize: [50, 64]
    }))
}

