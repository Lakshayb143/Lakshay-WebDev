import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);

    if (!user) return;
    const Id = Date.now();
    const newUser = { id: Id, name: user };
    const updatedUsers = [...userData, newUser];
    setUserData(updatedUsers);
    setUser("");
    console.log(userData);
  };

  const removeUser = (id) => {
    const updatedUsers = userData.filter((user) => user.id !== id);
    setUserData(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
