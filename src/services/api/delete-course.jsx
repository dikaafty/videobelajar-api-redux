import axios from "axios";

const deleteCourse = async (url, idx, setCourses, setError) => {
  try {
    const res = await axios.delete(`${url}/${idx}`);
    const data = res.data;
    setCourses(data);
  } catch (err) {
    setError(err.message);
  }
}

export default deleteCourse;