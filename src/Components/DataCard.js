import {React, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DataCard(props) {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [editorInput, setEditorInput] = useState("");
  const [endDate, setEndDate] = useState(new Date());

  function submitData(idx){
    console.log(idx);
    let startDate = new Date();
    let curStartDate = startDate.getDate() + "/" + startDate.getMonth() + "/" + startDate.getFullYear();
    let curEndDate = endDate.getDate() + "/" + endDate.getMonth() + "/" + endDate.getFullYear();

    props.EditData(idx, titleInput, descInput, editorInput, curStartDate, curEndDate);
  }

  return (
    <>
        {props.toDoData.length>0 ? null : <h1> To Do List is Empty...!!! </h1> }
      {props.toDoData.map((element, index) => {
        return (
            <div className="card text-center card-cust">
              <div className="card-header">{element.TitleName}</div>
              <div className="card-body">
                <h5 className="card-title">{element.EditorName}</h5>
                <p className="card-text">{element.Desc}</p>
                <button
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                //   onClick={()=>{setEdited(index)}}
                >
                  Edit
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Make Your Changes
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
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
                          <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button className="btn btn-primary" onClick={()=>{submitData(index)}}>
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                &nbsp;
                <button className="btn btn-danger" onClick={()=>{console.log(index); props.RemoveData(index)}}>Remove</button>
              </div>
              <div className="card-footer text-muted">
                Start Date: {element.StartDate} &nbsp; End Date:{" "}
                {element.EndDate}
              </div>
            </div>
        );
      })}
    </>
  );
}

export default DataCard;
