import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setIsLoading(false);
          setIsError(true);
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData(url);
  }, []);

  return { isLoading, isError, user };
};

export default useFetch;
