import TaskItem from "./TaskItem";
import React, { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { getTacheAdduction } from "./../../../service/TacheAdductionS";
import { setTemporaryTask } from "../../../redux/TemporaireTacheSlice"
import { setBaseTacheAdduction } from "../../../redux/BaseTodoSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { saveChange } from "../../../redux/BaseTodoSlice";


const TasksList = (props) => {
  const dispatch = useDispatch();
  const [tacheLocal, setTacheLocal] = useState();
  const baseTasks = useSelector((state) => state.baseTodo);
  const tacheTemporaire = useSelector((state, key) => state.temporaireTache)
  const doneTasks = tacheTemporaire.filter((t) => t.etat === true);
  const [pourcentage, setPourcentage] = useState(0)

  const goSave = (event) => {
    event.preventDefault();
    dispatch(saveChange({ "ancien": baseTasks, "nouveau": tacheTemporaire }))
    window.location.reload();
  }
  useEffect(() => {
    setPourcentage(Math.trunc((doneTasks.length / tacheTemporaire.length) * 100))
  })

  useEffect(() => {
    const handleTacheAdduction = async () => {
      const tA = await getTacheAdduction();
      setTacheLocal(tA.data);
    }
    if (!tacheLocal)
      handleTacheAdduction()
    if (tacheLocal) {
      dispatch(setTemporaryTask(tacheLocal))
      dispatch(setBaseTacheAdduction(tacheLocal))
    }

  }, [tacheLocal, dispatch])

  return (
    <>
      <br></br>
      <ProgressBar variant="primary" now={pourcentage} label={`${pourcentage}%`} />
      <br></br>
      {tacheTemporaire.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
      <br></br>
      <form onSubmit={goSave} >
        <Button type="submit" variant="success"> Valider modification </Button>{' '}
      </form>
    </>
  );
};

export default TasksList;
