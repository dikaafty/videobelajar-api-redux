import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCourse = (url) => {
  const [ courses, setCourses ] = useState([]);
  const [ error, setError ] = useState("");
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        setCourses(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { courses, error, isLoading }
}