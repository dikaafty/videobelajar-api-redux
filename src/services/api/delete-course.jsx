import axios from "axios";

const deleteCourse = async (url, idx, setCourses, setError) => {
  try {
    const res = await axios.delete(`${url}/${idx}`);
    const data = res.data;
    setCourses(prev => prev.filter(course => course.id !== idx));
  } catch (err) {
    setError(err.message);
  }
}

export default deleteCourse;