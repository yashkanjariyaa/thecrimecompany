import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
const UserComponent: React.FC<UserData> = (props) => {
  const [user, setUser] = useState<UserData>(props);
  const { isLoggedIn } = useUser();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>User Details</h1>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
            <button onClick={() => console.log("Change name")}>Change</button>
          </div>
          <div>
            <label>Contact: </label>
            <input
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleInputChange}
            />
            <button onClick={() => console.log("Change contact")}>
              Change
            </button>
          </div>
          <div>
            <label>Address: </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleInputChange}
            />
            <button onClick={() => console.log("Change address")}>
              Change
            </button>
          </div>
          <Link to="/user-form">Fill in details</Link>
        </div>
      ) : (
        <Link to="/auth">Login</Link>
      )}
    </div>
  );
};

export default UserComponent;
