import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseUrl } from "../utils/constant";

const PopUp = ({ setShowPopUp, popupContent, setUpdateUi }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateTodo = async () => {
    try {
      await axios.put(`${baseUrl}/update/${popupContent.id}`, {
        todo: input,
      });
      setUpdateUi((prev) => !prev);
      setShowPopUp(false);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className=" fixed flex justify-center items-center translate-y-[150%] bg-slate-800 px-6 pb-6 pt-2 glassmorphism ">
      <div>
        <div className=" flex justify-end">
          <RxCross1
            className=" cursor-pointer hover:text-red-500 transition-all duration-200"
            fontSize={20}
            onClick={() => setShowPopUp(false)}
          />
        </div>
        <h1 className=" text-xl text-center font-medium mb-5 ">Update Todo</h1>
        <div className=" flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update Todo"
            className=" text-slate-900 bg-slate-100 px-4 py-1"
          />
          <button
            className=" text-slate-900 bg-slate-100 px-3 py-1"
            onClick={updateTodo}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
