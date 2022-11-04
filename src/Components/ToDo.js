import React, { useState, useEffect } from "react";
import AddNew from "./AddNew";
import DataCard from "./DataCard";

function ToDo() {
  const [toDoData, setToDoData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('finaleData'));
    if(data!=null) {setToDoData(data);}
  }, [])

  useEffect(() => {
    if(toDoData.length>0)
        window.localStorage.setItem('finaleData', JSON.stringify(toDoData))
  }, [toDoData]);
  
  function addNewData(
    titleInput,
    descInput,
    editorInput,
    curStartDate,
    curEndDate
  ) {
    const obj = {
      TitleName: titleInput,
      Desc: descInput,
      EditorName: editorInput,
      StartDate: curStartDate,
      EndDate: curEndDate,
    };

    const newToDo = [...toDoData, obj];
    setToDoData(newToDo);
    console.log(toDoData);
  }

  function EditData(
    index,
    titleInput,
    descInput,
    editorInput,
    curStartDate,
    curEndDate
  ) {
    let newToDo = [...toDoData];
    console.log(index);

    let NewObj = {
        TitleName : titleInput,
        Desc : descInput,
        EditorName : editorInput,
        StartDate : curStartDate,
        EndDate : curEndDate,
    }

    newToDo[index] = NewObj;

    setToDoData(newToDo);
  }

  function RemoveData(index) {
    let newToDo = [...toDoData];
    newToDo.splice(index, 1);

    setToDoData(newToDo);
  }

  return (
    <>
      <h1>To Do App</h1>
      <AddNew addNewData={addNewData} />
      <div className="showData">
      <DataCard
        toDoData={toDoData}
        EditData={EditData}
        RemoveData={RemoveData}
      />
      </div>
    </>
  );
}

export default ToDo;
