import axios from "axios";

const createPost = async (url, newCourse, setCourses, setError) => {
  try {
    const res = await axios.post(url, newCourse);
    const data = res.data;
    setCourses(data);
  } catch (err) {
    setError(err.message);
  }
}

export default createPost;