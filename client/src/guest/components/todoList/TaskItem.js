import { useDispatch } from "react-redux";
import { toggleBaseTacheAdduction, deleteBaseTacheAdduction } from "../../../redux/BaseTodoSlice";

const TaskItem = (props) => {
  const { task } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.etat}
          onChange={() => dispatch(toggleBaseTacheAdduction(task))}
        />
        {task.nom}

        <span
          onClick={() => dispatch(deleteBaseTacheAdduction(task.id))}
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
