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
        // console.log("ajout",data);
    },
    supprimer: (id) => {
        return axios.delete(backUrl + "/api/projet/supprimer/"+id);
    },
    ModifierProjet: (id) => {
        return axios.put(backUrl + "/api/projet/modifier/"+id);
    },
    getById: (id) => {
        return axios.get(backUrl + "/api/projet/detail/"+id);
    },
    nbrProjet: (data) => {
        return axios.get(backUrl + "/api/projet/nbrProjet", data);
    },
    finitionProjet:(data) => {
        return axios.get(backUrl +"/api/projet/projetFini" ,data);
    }

}
export default CrudService;