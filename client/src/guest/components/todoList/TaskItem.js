import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../../redux/TemporaireTacheSlice";

const TaskItem = (props) => {
  const { task } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.etat}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.nom}

        <span
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
