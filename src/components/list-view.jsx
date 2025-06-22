import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { useFetchCourse } from "../services/api/fetch-course";

const COURSE_API = import.meta.env.VITE_COURSE_API;