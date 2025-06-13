import { useEffect } from "react";
import { useFetchCourse } from "./services/api/fetch-course";

const Homepage = () => {
  const COURSE_API = import.meta.env.VITE_COURSE_API;
  const { courses } = useFetchCourse(COURSE_API);

  useEffect(() => {
    
  }, []);

  return (

  );
}

export default Homepage;