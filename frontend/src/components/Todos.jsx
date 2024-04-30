import { VscEdit } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { baseUrl } from "../utils/constant";

const Todos = ({ text, id, setUpdateUi, setShowPopUp, setPopupContent }) => {
  const deleteTodo = async () => {
    try {
      await axios.delete(`${baseUrl}/delete/${id}`);
      setUpdateUi((prev) => !prev);
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateTodo = () => {
    setPopupContent({ text, id });
    setShowPopUp(true);
  };
  return (
    <div className=" flex gap-5 mb-2 justify-between bg-slate-700 px-4 py-1">
      {text}
      <div className=" flex gap-2 items-center">
        <VscEdit
          className=" cursor-pointer hover:text-green-400 transition-all duration-200"
          fontSize={24}
          onClick={updateTodo}
        />
        <RxCross1
          className=" cursor-pointer hover:text-red-500 transition-all duration-200"
          fontSize={24}
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
};

export default Todos;
