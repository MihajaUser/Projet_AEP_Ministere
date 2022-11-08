import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBaseTacheAdduction } from "../../../redux/BaseTodoSlice";

const TaskForm = (props) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const tache = {
      "id_utilisateur": 0,
      "nom": text,
      "etat": false
    }
    dispatch(addBaseTacheAdduction(tache));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
