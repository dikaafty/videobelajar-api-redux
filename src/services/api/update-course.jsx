import axios from "axios";

const updateCourse = async (url, item, itemId, setCourses, setError) => {
  try {
    const res = await axios.put(`${url}/${itemId}`, item);
    const data = res.data;
    setCourses(data);
  } catch (err) {
    setError(err.message);
  }
}

export default updateCourse;