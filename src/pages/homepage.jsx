import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchCourse } from "../services/api/fetch-course";
import { setCourse } from "../features/user/course-slice";
import Header from "../components/header";
import Body from "../components/body";
import Hero from "../components/hero";
import Container from "../components/container";
import CardSectionDesc from "../components/card-section-desc";
import CardSectionTabs from "../components/card-section-tabs";
import Card from "../components/card";
import Newsletter from "../components/newsletter";

const Homepage = () => {
  const COURSE_API = import.meta.env.VITE_COURSE_API;
  const { courses, error, isLoading } = useFetchCourse(COURSE_API);
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);

  useEffect(() => {
    if(courses) {
      dispatch(setCourse(courses));
    }
  }, [courses]);

  return (
    <>
      <Header />
    </>
  );
}

export default Homepage;