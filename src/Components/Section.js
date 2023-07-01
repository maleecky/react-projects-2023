import { useEffect, useReducer, useState } from "react";
import Tasklists from "./Tasklists";
import { reducerHandler } from "./Reducer";
import { getTheDataFromtheLocalStorage } from "./LocalStorageData";

let initialState = getTheDataFromtheLocalStorage();

export default function Section() {
  const [tasks, dispatch] = useReducer(reducerHandler, initialState);
  const [text, setText] = useState("");

  useEffect(() => {
    const savedTasks = getTheDataFromtheLocalStorage();
    initialState = savedTasks;
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (text !== "") {
      dispatch({
        type: "add_task",
        payLoads: {
          task: text,
          id: new Date().getTime(),
        },
      });
      setText("");
    }
  }
  return (
    <section>
      <div className="section-wrapper">
        <div className="bg-text">
          <div>
            You can effortlessly add, edit, and organize your to-do tasks in a
            snap.
          </div>
          <div>
            Simply start by adding a task, and let our intuitive interface guide
            you through the rest.
          </div>
        </div>
        <div className="form-wrapper">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="New task..."
                className="task--input"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="grn--btn">
              Add Task
            </button>
          </form>
        </div>
        <ul className="lists-wrapper">
          <div className="lists-header">Todo Lists</div>
          <Tasklists tasks={tasks} dispatch={dispatch} />
        </ul>
      </div>
    </section>
  );
}
