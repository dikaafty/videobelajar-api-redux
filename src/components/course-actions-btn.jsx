import { setSelectedCourse, handleEdit, handleDelete } from "../features/user/course-slice";
import { useDispatch, useSelector } from "react-redux";
import useRequestStates from "../services/api/request-states";
import deleteCourse from "../services/api/delete-course";
import { useEffect } from "react";
import updateCourse from "../services/api/update-course";

const COURSE_API = import.meta.env.VITE_COURSE_API;

const CourseActionsBtn = ({ action, item, idx, itemId }) => {
  const dispatch = useDispatch();
  const { setCourses, setError } = useRequestStates();
  const course = useSelector((state) => state.course);

  useEffect(() => {
    if(item && course.selectedCourse) {
      if(item.id === course.selectedCourse.id && itemId) {
        updateCourse(COURSE_API, course.editedCourse, itemId, setCourses, setError);
        dispatch(setSelectedCourse(null));
      }
    }
  }, [course.editedCourse]);

  return (
    <button 
      onClick={action === "edit" ? 
        () => {
          dispatch(handleEdit(item));
        } : 
        () => {
          dispatch(handleDelete(idx));
          deleteCourse(COURSE_API, itemId, setCourses, setError);
        }
      } // not put or delete to API yet
      className={
        action === "edit" ? "border-1 border-[#3ECF4C] rounded-[10px] py-1.5 px-5 sm:px-6.5 font-dm-sans font-bold text-xs sm:text-base tracking-[0.2px] text-[#3ECF4C] cursor-pointer hover:bg-[#F4F5FA] transition-all duration-300" 
        : "bg-red-500 hover:bg-red-600 rounded-[10px] py-1.5 px-5 sm:px-6.5 font-dm-sans font-bold text-xs sm:text-base tracking-[0.2px] text-white cursor-pointer transition-all duration-300"
      }>
        { action === "edit" ? "Edit Course" : "Delete Course" }
    </button>
  );
}

export default CourseActionsBtn;