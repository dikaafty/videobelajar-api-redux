import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { useFetchCourse } from "../services/api/fetch-course";
import { setCourse } from "../features/user/course-slice";
import Card from "./card";
import Container from "./container";
import CourseActionsBtn from "./course-actions-btn";

const COURSE_API = import.meta.env.VITE_COURSE_API;

const ListView = () => {
  const { courses, error, isLoading } = useFetchCourse(COURSE_API);
  const dispatch = useDispatch();
}

export default ListView;