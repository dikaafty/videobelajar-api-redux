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
import Footer from "../components/footer";
import FooterBrandInfo from "../components/footer-brand-info";
import Nav from "../components/nav";
import Divider from "../components/divider";
import FooterBottomBar from "../components/footer-bottom-bar";
import Dialog from "../components/dialog";
import AddCourseBtn from "../components/add-course-btn";

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

      <Body>
        <Hero />

        <Container className="w-full flex flex-col gap-6 sm:gap-8">
          <CardSectionDesc />

          <CardSectionTabs />

          <Container
            className="w-full grid grid-cols-[1fr] sm:grid-cols-[repeat(auto-fit,_minmax(384px,_1fr))]
            grid-rows-[repeat(auto-fit,_minmax(0,_1fr))] place-items-center gap-y-5 sm:gap-y-8 gap-x-6">
              
          </Container>
        </Container>
      </Body>
    </>
  );
}

export default Homepage;