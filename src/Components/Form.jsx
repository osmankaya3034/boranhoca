import React, { useState } from "react";

const Form = ({setTask,setDate,addTask}) => {
    
    const submit = (e) => {
        e.preventDefault()
        
        addTask()

        // setTask('')
        // setDate('')
    }


  return (
    <div>
      <form onSubmit={submit}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Task
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => setTask(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
        </div>
        <button type="submit" className="btn btn-primary px-5">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;










