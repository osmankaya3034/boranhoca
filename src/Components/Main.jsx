import React from "react";
import Task from "./Task";

const Main = ({ works }) => {
  console.log(works);

  return (
    <div>
      {works.map((t) => {
        return (
          <div>
            <Task t={t} />
          </div>
        );
      })}
    </div>
  );
};

export default Main;