import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   setCourse, createNewCourse, setCourseImg, setCourseTitle, setCourseDescription,
   setCoursePrice, setSelectedCourse, setIsOpen
  } 
from "../features/user/course-slice";
import useRequestStates from "../services/api/request-states";
import createPost from "../services/api/post-course";

const Dialog = () => {
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { setCourses, setError } = useRequestStates();
  const COURSE_API = import.meta.env.VITE_COURSE_API;

  const newCourse = {
    courseImg: course.courseImg,
    courseTitle: course.courseTitle,
    courseDescription: course.courseDescription,
    coursePrice: course.coursePrice
  }

  const imgPattern = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg)$/;
  const pricePattern = /^[0-9]+K$/;

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
    <>
      { course.isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080]">
          <div 
            className="w-9/10 h-fit sm:w-xl bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 rounded-[10px] shadow-lg p-4 sm:p-6 animate-dialog-slide-down">
              <p 
                className="font-poppins font-semibold text-lg sm:text-2xl text-[#222325] leading-[1.2]
                mb-2 sm:mb-4">
                  Add new course
              </p>

              <div className="w-full flex flex-col gap-3 sm:gap-4">
                <div className="w-full flex flex-col gap-0.5">
                  <label 
                    htmlFor="imageUrl"
                    className="font-dm-sans font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px]
                    text-[#333333AD] pr-3.5 pb-1 flex gap-1">
                      Image URL
                      <span 
                        className="text-base leading-6 tracking-[0.15px] text-[#FF5C2B]">
                          *
                      </span>
                  </label>

                  <input 
                    type="url" 
                    name="imageUrl" 
                    id="imageUrl"
                    onChange={(e) => dispatch(setCourseImg(e.target.value))} 
                    className="w-full h-12 py-1 px-3 border-1 border-[#3A35411F] rounded-[10px] font-dm-sans
                    font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px] align-middle text-[#222325]
                    focus:shadow-md focus:outline-none valid:border-[#38D189] focus:invalid:border-[#FF5C2B] 
                    transition-all duration-300" 
                    placeholder="https://example.com/image.jpg"
                    pattern="^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg)$"
                    title="Enter a valid image URL ending in .png, .jpg, .jpeg, .gif, .webp, or .svg"
                    value={course.courseImg}
                    required
                  />
                </div>

                <div className="w-full flex flex-col gap-0.5">
                  <label 
                    htmlFor="courseTitle"
                    className="font-dm-sans font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px]
                    text-[#333333AD] pr-3.5 pb-1 flex gap-1">
                      Title
                      <span 
                        className="text-base leading-6 tracking-[0.15px] text-[#FF5C2B]">
                          *
                      </span>
                  </label>

                  <input 
                    type="text" 
                    name="courseTitle" 
                    id="courseTitle"
                    onChange={(e) => dispatch(setCourseTitle(e.target.value))} 
                    className="w-full h-12 py-1 px-3 border-1 border-[#3A35411F] rounded-[10px] font-dm-sans
                    font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px] align-middle text-[#222325]
                    focus:shadow-md focus:outline-none valid:border-[#38D189] focus:invalid:border-[#FF5C2B] 
                    transition-all duration-300" 
                    placeholder="Introduction to React"
                    minLength={5}
                    value={course.courseTitle}
                    required
                  />
                </div>

                <div className="w-full flex flex-col gap-0.5">
                  <label 
                    htmlFor="courseDescription"
                    className="font-dm-sans font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px]
                    text-[#333333AD] pr-3.5 pb-1 flex gap-1">
                      Description
                      <span 
                        className="text-base leading-6 tracking-[0.15px] text-[#FF5C2B]">
                          *
                      </span>
                  </label>

                  <input 
                    type="text" 
                    name="courseDescription" 
                    id="courseDescription"
                    onChange={(e) => dispatch(setCourseDescription(e.target.value))} 
                    className="w-full h-12 py-1 px-3 border-1 border-[#3A35411F] rounded-[10px] font-dm-sans
                    font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px] align-middle text-[#222325]
                    focus:shadow-md focus:outline-none valid:border-[#38D189] focus:invalid:border-[#FF5C2B] 
                    transition-all duration-300" 
                    placeholder="This course is about..."
                    minLength={15}
                    value={course.courseDescription}
                    required
                  />
                </div>

                <div className="w-full flex flex-col gap-0.5">
                  <label 
                    htmlFor="coursePrice"
                    className="font-dm-sans font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px]
                    text-[#333333AD] pr-3.5 pb-1 flex gap-1">
                      Price
                      <span 
                        className="text-base leading-6 tracking-[0.15px] text-[#FF5C2B]">
                          *
                      </span>
                  </label>

                  <input 
                    type="text" 
                    name="coursePrice" 
                    id="coursePrice"
                    onChange={(e) => dispatch(setCoursePrice(e.target.value))} 
                    className="w-full h-12 py-1 px-3 border-1 border-[#3A35411F] rounded-[10px] font-dm-sans
                    font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px] align-middle text-[#222325]
                    focus:shadow-md focus:outline-none valid:border-[#38D189] focus:invalid:border-[#FF5C2B] 
                    transition-all duration-300" 
                    placeholder="300K"
                    pattern="[0-9]+K" 
                    title="Enter a number followed by an uppercase K, like 300K" 
                    value={course.coursePrice}
                    required
                  />
                </div>
              </div>

              <div className="w-full mt-4 sm:mt-6 flex justify-end gap-2 sm:gap-3">
                <button 
                  onClick={() => {
                    dispatch(setSelectedCourse(null));
                    dispatch(setIsOpen(false));
                  }}
                  className="border-1 border-[#3ECF4C] rounded-[10px] py-1.5 px-6.5 font-dm-sans font-bold
                  text-sm sm:text-base tracking-[0.2px] text-[#3ECF4C] cursor-pointer hover:bg-[#F4F5FA]
                  transition-all duration-300">
                    Cancel
                </button>

                <button 
                  onClick={() => {
                    if (
                      imgPattern.test(course.courseImg) &&
                      typeof course.courseTitle === 'string' && course.courseTitle.length >= 5 &&
                      typeof course.courseDescription === 'string' && course.courseDescription.length >= 15 &&
                      pricePattern.test(course.coursePrice)
                    ) {
                      if(course.selectedCourse) {
                        setCourse(
                          course.courseData.map((item) => 
                          item === course.selectedCourse ? 
                            {
                              ...item,
                              courseImg: course.courseImg,
                              courseTitle: course.courseTitle,
                              courseDescription: course.courseDescription,
                              coursePrice: course.coursePrice
                            } :
                            item
                          )
                        );
                      } else {
                        dispatch(createNewCourse(newCourse));

                        createPost(COURSE_API, newCourse, setCourses, setError);
                      }
                      
                      dispatch(setSelectedCourse(null));
                      dispatch(setIsOpen(false));
                    }
                  }}
                  className="bg-[#3ECF4C] rounded-[10px] py-1.5 px-6.5 font-dm-sans font-bold
                  text-sm sm:text-base tracking-[0.2px] text-white cursor-pointer hover:bg-[#56b15f]
                  transition-all duration-300">
                    Submit
                </button>
              </div>
          </div>
        </div>
      ) }
    </>
  );
}

export default Dialog;