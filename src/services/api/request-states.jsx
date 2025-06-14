import { useState } from "react";

const useRequestStates = () => {
  const [ courses, setCourses ] = useState([]);
  const [ error, setError ] = useState("");
  const [ isLoading, setIsLoading ] = useState(true);

  return { courses, setCourses, error, setError, isLoading, setIsLoading };
}

export default useRequestStates;