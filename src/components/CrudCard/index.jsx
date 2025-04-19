import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const CrudCard = ({ task, dispatch }) => {
  // Task silecek fonksiyon
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  console.log(task.id);

  return (
    <div className="crud-card">
      <h1>{task.title}</h1>
      <p>{task.date} </p>

      <div className="d-flex gap-3">
        <button
          onClick={() => handleDelete(task.id)}
          className="btn btn-danger btn-lg"
        >
          <MdOutlineDelete />
        </button>
        <button className="btn btn-secondary btn-lg">
          <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default CrudCard;
