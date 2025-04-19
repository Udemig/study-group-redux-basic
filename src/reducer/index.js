import { v4 } from "uuid";

// Initial State
const initialState = {
  tasks: [],
  studentName: "Esra Akgündoğdu",
};

// Reducer
const taskReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    // Task ekle
    case "ADD_TASK":
      return {
        ...state,
        // state içerisindeki diğer değerleri koru tasks içerisine ise yeni taskı ekle
        tasks: [
          ...state.tasks,
          {
            id: v4(),
            title: action.payload,
            date: new Date().toLocaleDateString("tr", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
          },
        ],
      };
    // Task sil
    case "DELETE_TASK":
      return {
        // State içerisindeki değerleri tut task dizisinde ise silinen elemanı kaldır
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.payload),
      };
    // Task güncelle
    case "EDIT_TASK":
      return state;

    default:
      return state;
  }
};

export { initialState, taskReducer };
