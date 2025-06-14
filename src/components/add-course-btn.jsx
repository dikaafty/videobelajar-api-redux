import { useDispatch } from "react-redux";
import { setIsOpen } from "../features/user/course-slice";

const AddCourseBtn = () => {
  const dispatch = useDispatch();

  return (
    <button 
      onClick={() => dispatch(setIsOpen(true))}
      className="w-15 h-15 bg-[#3ECF4C] text-white text-[40px] font-bold fixed bottom-6 right-6 leading-none 
      flex justify-center items-center font-mono rounded-full pb-1 cursor-pointer hover:bg-white
      hover:border-2 hover:border-[#3ECF4C] hover:text-[#3ECF4C] transition-all duration-300
      transform rotate-45 hover:rotate-90 max-sm:w-12 max-sm:h-12 max-sm:text-3xl max-sm:font-semibold
      max-sm:rotate-360"
      title="Add new course">
        +
    </button>
  );
}

export default AddCourseBtn;