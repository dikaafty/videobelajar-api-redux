import axios from "axios";

const deleteCourse = async (url, itemId, setCourses, setError) => {
  try {
    const res = await axios.delete(`${url}/${itemId}`);
    setCourses(prev => prev.filter(course => course.id !== itemId));
  } catch (err) {
    setError(err.message);
  }
}

export default deleteCourse;