import { useEffect } from 'react';
import L from 'leaflet';
import "./legend.css"
import citerneIcon from '../../assets/imagesClient/robinet_bleu.png'
import MaisonIcon from '../../assets/imagesClient/maison_rouge.png'
export default function Legend({ map }) {
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomright" });
      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML =
          '<div><img src="' + MaisonIcon + '" width="30px" height="30px" /><h4>Station  </h4>' +
          '<img src="' + citerneIcon + '" width="20px" height="30px" /><h4>Citerne</h4></div>';
        return div;
      };
      legend.addTo(map);
    }
  }, [map]); //here add map
  return null;
}