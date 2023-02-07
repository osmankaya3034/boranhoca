import React from "react";

const Task = ({ t }) => {

  return (
    <div>
      <div className="card mt-5 mx-5">
        <div className="card-header">{t.date}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{t.task}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Task;