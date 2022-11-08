import TaskItem from "./TaskItem";
import React, { useEffect, useState } from "react";
import { getTacheAdduction } from "./../../../service/TacheAdductionS";
import { setTemporaryTask } from "../../../redux/TemporaireTacheSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { saveChange } from "../../../redux/BaseTodoSlice";

const TasksList = (props) => {
  const dispatch = useDispatch();
  const [tacheLocal, setTacheLocal] = useState();
  const baseTasks = useSelector((state) => state.baseTodo);
  const tacheTemporaire = useSelector((state, key) => state.temporaireTache)

  const goSave = (event) => {
    event.preventDefault();
    dispatch(saveChange({ "ancien": baseTasks, "nouveau": tacheTemporaire }))
  }
  useEffect(() => {
    const handleTacheAdduction = async () => {
      const tA = await getTacheAdduction();
      setTacheLocal(tA.data);
    }
    if (!tacheLocal)
      handleTacheAdduction()
    if (tacheLocal) {
      dispatch(setTemporaryTask(tacheLocal))
    }
  }, [tacheLocal, dispatch])
  // console.log("temporaire ====================================")
  // console.log(tacheTemporaire)
  // console.log("base =========================================")
  // console.log(baseTasks)
  return (
    <>
      {tacheTemporaire.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
      <br></br>
      <br></br>
      <form action="/todoList" onSubmit={goSave} >
        <Button type="submit" variant="success"> Valider modification </Button>{' '}
      </form>
    </>
  );
};

export default TasksList;
