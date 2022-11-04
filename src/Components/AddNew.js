import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddNew(props) {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [editorInput, setEditorInput] = useState("");
  const [endDate, setEndDate] = useState(new Date());

  function submitData(){
    let startDate = new Date();

    let curStartDate = startDate.getDate() + "/" + startDate.getMonth() + "/" + startDate.getFullYear();
    let curEndDate = endDate.getDate() + "/" + endDate.getMonth() + "/" + endDate.getFullYear();

    props.addNewData(titleInput, descInput, editorInput, curStartDate, curEndDate);

    setTitleInput(''); setDescInput(''); setEditorInput(''); setEndDate(new Date());
  }

  return (
    <>
    <div className="InputContain">
      <input
        type="text"
        className="form-control"
        placeholder="add Title"
        value={titleInput}
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-control"
        placeholder="add Description"
        value={descInput}
        onChange={(e) => {
          setDescInput(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-control"
        placeholder="add Editor Name"
        value={editorInput}
        onChange={(e) => {
          setEditorInput(e.target.value);
        }}
      />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      <button className="btn btn-primary" onClick={submitData}>Add</button>
      </div>
    </>
  );
}

export default AddNew;
