import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchCourse } from "../services/api/fetch-course";
import { setCourse } from "../features/user/course-slice";

const Homepage = () => {
  const COURSE_API = import.meta.env.VITE_COURSE_API;
  const { courses, error, isLoading } = useFetchCourse(COURSE_API);
  const dispatch = useDispatch();

  useEffect(() => {
    if(courses) {
      dispatch(setCourse(courses));
    }
  }, [courses]);

  return (

  );
}

export default Homepage;