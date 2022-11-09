import "./App.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";

export default function TodList() {
  return (
    <div className="container">
      <article>
        <TasksHeader />
        <TaskForm />
        <TasksList />
      </article>
    </div>
  );
}
