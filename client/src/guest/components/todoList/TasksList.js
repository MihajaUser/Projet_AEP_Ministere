import TaskItem from "./TaskItem";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const TasksList = (props) => {
  const tasks = useSelector((state) => state.todo);
  const baseTasks = useSelector((state) => state.baseTodo);
  return (
    <>
      {baseTasks.tacheAdduction.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;
