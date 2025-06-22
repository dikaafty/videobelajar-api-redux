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
  const course = useSelector((state) => state.course);

  useEffect(() => {
    if(courses) {
      dispatch(setCourse(courses));
    }
  }, [courses]);

  return (
    <>
      {
        isLoading ? 
        (
          <p 
            className="font-poppins text-2xl sm:text-[32px] font-semibold leading-[1.1]
            text-[#222325]">
              Loading...
          </p>
        ) : error ? 
        (
          <p 
            className="font-poppins text-2xl sm:text-[32px] font-semibold leading-[1.1] 
            text-red-500">
              Error: {error}
          </p>
        ) : (
          course.courseData.map((item, idx) => 
            <Fragment key={idx}>
              <Card isUserCourse={true} idx={idx}>
                <Container 
                  className="w-full flex justify-end sm:justify-around max-sm:col-span-2 
                  max-sm:gap-2 *:max-sm:mt-1.5">
                    <CourseActionsBtn action="edit" item={item} itemId={item.id} />
                    <CourseActionsBtn action="delete" idx={idx} itemId={item.id} />
                </Container>
              </Card>
            </Fragment>
          )
        )
      }
    </>
  );
}

export default ListView;