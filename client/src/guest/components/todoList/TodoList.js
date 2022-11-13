import "./App.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";

export default function TodList() {
  return (
    <div className="Container">
      <div className="TasksList">
        <article>
          <TasksHeader />
          <TaskForm />
          <TasksList />
        </article>
      </div>
    </div>
  );
}
