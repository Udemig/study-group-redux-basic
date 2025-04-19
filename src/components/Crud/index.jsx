import React, { useReducer } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { initialState, taskReducer } from "../../reducer";
import CrudCard from "../CrudCard";
const Crud = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();
    // Input içerisindeki değere eriş
    const text = e.target[0].value;

    // Reducer'a haber et
    dispatch({ type: "ADD_TASK", payload: text });

    // Formu resetle

    e.target.reset();
  };

  return (
    <div className="container my-4 text-center">
      <h2 className="fs-1 fw-bold">Crud Example</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="d-flex gap-3">
        <input
          type="text"
          placeholder="Writing something ..."
          className="form-control"
        />
        <button type="submit" className="btn btn-success">
          <IoIosAddCircleOutline className="fs-2" />
        </button>
      </form>

      {/* Task List */}
      <div className="card-container">
        {state.tasks.map((i, key) => (
          <CrudCard key={key} task={i} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default Crud;
