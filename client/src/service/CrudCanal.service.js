//update
import axios from "axios";
// localhost: 8080  /api/projet/projets
const backUrl = 'http://localhost:8080';
export const CrudCanalService= {

    getAllCanalisation: (data) => {
        return axios.get(backUrl + "/api/canalisation/Canalisations",data);
    },
    AjoutCanalisation: (data) => {
        // console.log(backUrl + /api/auth/signin);
        return axios.post(backUrl + "/api/canalisation/AjoutCanalisation", data);
    },
    supprimer: (id) => {
        return axios.delete(backUrl + "/api/canalisation/supprimer/"+id);
    }

}
export default CrudCanalService;