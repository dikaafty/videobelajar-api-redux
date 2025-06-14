import { useEffect } from "react";
import axios from "axios";
import useRequestStates from "./request-states";

export const useFetchCourse = (url) => {
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