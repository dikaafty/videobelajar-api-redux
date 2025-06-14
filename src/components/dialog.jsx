import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   setCourse, createNewCourse, setCourseImg, setCourseTitle, setCourseDescription,
   setCoursePrice, setSelectedCourse, setIsOpen
  } 
from "../features/user/course-slice";

const Dialog = () => {
  const course = useSelector((state) => state.course);

  return (
    
  );
}

export default Dialog;