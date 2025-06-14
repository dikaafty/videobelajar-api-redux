import axios from "axios";
import useRequestStates from "./request-states";

const createPost = async (url, newCourse, setCourses, setError) => {
  try {
    const res = await axios.post(url, newCourse);
    const data = res.data;
    setCourses(data);
    console.log("Post data successfully!");
  } catch (err) {
    setError(err.message);
  }
}