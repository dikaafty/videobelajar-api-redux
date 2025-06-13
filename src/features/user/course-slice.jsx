import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    course: [],
    selectedCourse: null,
    courseImg: "",
    courseTitle: "",
    courseDescription: "",
    coursePrice: "",
    isOpen: false
  },
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    createNewCourse: (state, action) => {
      state.course.push(action.payload);
    },
    handleDelete: (state, action) => {
      state.course.filter(item => item !== action.payload);
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    handleEdit: (action) => {
      setSelectedCourse(action.payload);
      setIsOpen(true);
    },
    setCourseImg: (state, action) => {
      state.courseImg = action.payload;
    },
    setCourseTitle: (state, action) => {
      state.courseTitle = action.payload;
    },
    setCourseDescription: (state, action) => {
      state.courseDescription = action.payload;
    },
    setCoursePrice: (state, action) => {
      state.coursePrice = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  }
});

export const { 
  setCourse, createNewCourse, handleDelete, handleEdit, setSelectedCourse,
  setCourseImg, setCourseTitle, setCourseDescription, setCoursePrice, setIsOpen
} = courseSlice.actions;

export default courseSlice.reducer;