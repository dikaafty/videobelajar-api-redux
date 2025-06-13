import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchCourse } from "./services/api/fetch-course";
import { setCourse } from "../features/user/course-slice";

const Homepage = () => {
  const COURSE_API = import.meta.env.VITE_COURSE_API;
  const { courses } = useFetchCourse(COURSE_API);

  useEffect(() => {

  }, []);

  return (

  );
}

export default Homepage;