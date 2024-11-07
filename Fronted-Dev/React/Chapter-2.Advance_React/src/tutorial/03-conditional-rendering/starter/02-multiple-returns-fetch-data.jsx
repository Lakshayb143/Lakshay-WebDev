import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        
        console.log(data);
        setUser(data);
      } catch (error) {
        setIsError(error);
        console.log("Error Detected: " + error.message);
      }

      setTimeout(() => setIsLoading(false), 1500);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There is an Error.</h2>;
  }

  const { avatar_url, html_url, name, bio } = user;
  return (
    <div
      style={{
        border: "4px solid black",
        margin: "1rem",
        padding: "2rem",
        borderRadius: "2rem",
      }}
    >
      <img
        src={avatar_url}
        alt={name}
        style={{ width: "200px", height: "200px", borderRadius: "1rem" }}
      />
      <h2>{name}</h2>
      <a href={html_url} target="_blank">
        View Profile
      </a>
      <p>{bio}</p>
    </div>
  );
};

export default MultipleReturnsFetchData;
