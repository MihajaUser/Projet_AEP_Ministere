import Axios, * as others from 'axios';
export const getTacheAdduction = () => {
  const data = Axios.get('http://localhost:8080/api/tacheAdduction/TacheAdductions')
  return data;
}

export const addTacheAdduction = (tache) => {
  const add = {
    "id_utilisateur": tache.id_utilisateur,
    "nom": tache.nom,
    "etat": tache.etat
  }
  const data = Axios.post('http://localhost:8080/api/tacheAdduction/AjoutTacheAdduction', add)
}

export const deleteTacheAdduction = (id) => {
  const data = Axios.delete('http://localhost:8080/api/tacheAdduction/supprimer/' + id)
}


export const updateTacheAdduction = (tache) => {
  const data = Axios.put('http://localhost:8080/api/tacheAdduction/modifier/' + tache.id, { "etat": !tache.etat })
}

