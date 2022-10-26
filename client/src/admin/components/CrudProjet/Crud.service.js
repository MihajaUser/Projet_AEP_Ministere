//update
import axios from "axios";
// localhost: 8080  /api/projet/projets
const backUrl = 'http://localhost:8080';
export const CrudService = {

    getAllProjet: (data) => {
        return axios.get(backUrl + "/api/projet/projets", data);
    },
    AjoutProjet: (data) => {
        // console.log(backUrl + /api/auth/signin);
        return axios.post(backUrl + "/api/projet/AjoutProjet", data);
    },
    supprimer: (data) => {
        return axios.post(backUrl + "/api/projet/supprimer", data);
    }

}
export default CrudService;