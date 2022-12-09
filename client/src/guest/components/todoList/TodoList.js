import "./App.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";
import { useParams } from 'react-router-dom';

export default function TodList() {
  const { idProjet } = useParams();
  return (
    <div className="Container">
      <div className="TasksList">
        <article>
          <TasksHeader idProjet={idProjet} />
          <TaskForm />
          <TasksList />
        </article>
      </div>
    </div>
  );
}
