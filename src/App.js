import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const { listMovie } = useSelector(state => state.movieReducer);
  const [nameTask, setNameTask] = useState("");
  useEffect(() => {
    dispatch({
      type: "getTaskApiAct"
    });
  }, []);


  return (
    <div className="container text-center">
      <form>
        <label htmlFor="">add task</label>
        <input type="text" value={nameTask} onChange={(e) => {
          setNameTask(e.target.value);
        }} />
        <button type="submit" onClick={(e) => {
          e.preventDefault();
          setNameTask("");

          dispatch({
            type: "addTask",
            data: {
              "taskName": nameTask
            }
          });
        }}>Add task</button>
      </form>
      <p style={{ color: "red", background: "yellow" }}>Inprogress</p>
      {listMovie.map((item, key) => {
        if (item.taskName === "") return <Fragment key={key}></Fragment>;
        if (!item.status) {
          return <div key={key} className="d-flex justify-content-center">
            <p style={{ width: "50%" }} >{item.taskName}</p>
            <button onClick={() => {

              dispatch({
                type: "doneTask",
                name: item.taskName
              });
            }}>Done</button>
            <button onClick={() => {
              dispatch({
                type: "removeTask",
                name: item.taskName
              });
            }}>Delete</button>
          </div>;
        }
        return <p key={key}></p>;
      })}
      <p style={{ color: "red", background: "yellow" }}>Done</p>
      {listMovie.map((item, key) => {
        if (item.taskName === "") return <Fragment key={key}></Fragment>;
        if (item.status) {
          return <div key={key} className="d-flex justify-content-center">
            <p style={{ width: "50%" }} >{item.taskName}</p>
            <button onClick={() => {
              dispatch({
                type: "rejectTask",
                name: item.taskName
              });
            }}>Reject</button>
            <button onClick={() => {
              dispatch({
                type: "removeTask",
                name: item.taskName
              });
            }}>Delete</button>
          </div>;
        }
        return <p key={key}></p>;
      })}
    </div>
  );
}

export default App;
