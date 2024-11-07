import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const fetchData = await fetch(url);
        const users = await fetchData.json();
        console.log(users);
        setUser(users);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
      <h2>Github Users</h2>
      <ul>
        {user.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img height="200px" width="200px" src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
