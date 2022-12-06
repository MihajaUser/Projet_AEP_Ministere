import { useSelector } from "react-redux";
const TasksHeader = ({ idProjet }) => {
  const tasks = useSelector(state => state.temporaireTache);
  const undoneTasks = tasks.filter((t) => t.etat === false);
  return (
    <header>
      <h1>Avancement Projet Adduction {idProjet}</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
