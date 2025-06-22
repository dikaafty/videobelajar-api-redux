import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { useFetchCourse } from "../services/api/fetch-course";
import Card from "./card";

const COURSE_API = import.meta.env.VITE_COURSE_API;