import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courseData: [],
    selectedCourse: null,
    editedCourse: null,
    courseImg: "",
    courseTitle: "",
    courseDescription: "",
    coursePrice: "",
    isOpen: false
  },
  reducers: {
    setCourse: (state, action) => {
      state.courseData = action.payload;
    },
    createNewCourse: (state, action) => {
      state.courseData.push(action.payload);
    },
    handleDelete: (state, action) => {
      state.courseData.splice(action.payload, 1);
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    handleEdit: (state, action) => {
      state.selectedCourse = action.payload,
      state.isOpen = true
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