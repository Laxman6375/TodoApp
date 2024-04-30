import { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import axios from "axios";
import { baseUrl } from "./utils/constant";
import PopUp from "./components/PopUp";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUi, setUpdateUi] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/get`);
      setTodos(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [updateUi]);

  const saveTodos = async () => {
    try {
      await axios.post(`${baseUrl}/save`, { todo: input });
      setUpdateUi((prev) => !prev);
      setInput("");
    } catch (error) {
      console.log("error:", error);
    }
  };

  // console.log(todos);
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col gap-5  items-center bg-slate-900 text-slate-200 pt-16 ">
        <h1 className=" text-5xl font-medium">Todo App</h1>
        <div className=" flex justify-center items-center gap-3 w-full">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a Todo"
            className=" bg-slate-700 px-4 py-1 w-[70%] lg:w-[25%]"
          />
          <button className=" bg-slate-700 px-3 py-1" onClick={saveTodos}>Add</button>
        </div>

        {/* list */}
        <div className=" flex flex-col justify-start w-[85%] lg:w-[29.3%]">
          {todos.map((todo) => {
            return (
              <Todos
                key={todo._id}
                text={todo.todo}
                id={todo._id}
                setUpdateUi={setUpdateUi}
                setShowPopUp={setShowPopUp}
                setPopupContent={setPopupContent}
                
              />
            );
          })}
        </div>
        {showPopUp && (
          <PopUp
            setShowPopUp={setShowPopUp}
            popupContent={popupContent}
            setUpdateUi={setUpdateUi}
          />
        )}
      </div>
    </>
  );
}

export default App;
