import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   setCourse, createNewCourse, setCourseImg, setCourseTitle, setCourseDescription,
   setCoursePrice, setSelectedCourse, setIsOpen
  } 
from "../features/user/course-slice";

const Dialog = () => {
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    if(course.selectedCourse) {
      setCourseImg(course.selectedCourse.courseImg);
      setCourseTitle(course.selectedCourse.courseTitle);
      setCourseDescription(course.selectedCourse.courseDescription);
      setCoursePrice(course.selectedCourse.coursePrice);
    } else {
      setCourseImg("");
      setCourseTitle("");
      setCourseDescription("");
      setCoursePrice("");
    }
  }, [course.selectedCourse, course.isOpen]);

  return (
    
  );
}

export default Dialog;