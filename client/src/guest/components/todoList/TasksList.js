import TaskItem from "./TaskItem";
import React, { useEffect, useState } from "react";
import { getTacheAdduction } from "./../../../service/TacheAdductionS";
import { setBaseTacheAdduction } from "../../../redux/BaseTodoSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const TasksList = (props) => {
  const [myTacheAdduction, setMyTacheAdduction] = useState();
  const dispatch = useDispatch();
  const baseTasks = useSelector((state) => state.baseTodo);
  useEffect(() => {
    const handleTacheAdduction = async () => {
      const tA = await getTacheAdduction();
      setMyTacheAdduction(tA.data);
    }
    if (!myTacheAdduction)
      handleTacheAdduction()
    if (myTacheAdduction) {
      dispatch(setBaseTacheAdduction(myTacheAdduction))
    }
  }, [myTacheAdduction, dispatch])
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
