import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../../redux/TemporaireTacheSlice";

const TaskItem = (props) => {
  const { task } = props;
  const dispatch = useDispatch();
  return (
    <div className="TaskItem">
      <label>
        <input
          type="checkbox"
          className="MyCheckbox"
          checked={task.etat}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.nom}
        <span
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          className="MySpan"
        >
          X
        </span>
      </label>
    </div>
  );
};
export default TaskItem;
