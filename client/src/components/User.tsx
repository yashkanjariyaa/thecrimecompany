import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import user from "../api/user";

const UserComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const { userEmail, isLoggedIn } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userEmail) {
          const data = await user.getUserData(userEmail?.email || "");
          setUserData(data);
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchUserData();
  }, [userEmail]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userData) {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleUpdate = async (field: string, value: string) => {
    if (userData) {
      try {
        const updates = { [field]: value };
        await user.updateUserData(userData.email, updates);
        setUserData({ ...userData, ...updates });
      } catch (error) {
        console.error(`Failed to update user ${field}`, error);
      }
    }
  };

  if (!isLoggedIn) {
    return <Link to="/auth">Login</Link>;
  }

  return (
    <div>
      <h1>User Details</h1>
      {userData && (
        <>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
            <button onClick={() => handleUpdate("name", userData.name)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
          <div>
            <label>Contact: </label>
            <input
              type="text"
              name="contact"
              value={userData.mobile}
              onChange={handleInputChange}
            />
            <button onClick={() => handleUpdate("contact", userData.mobile)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
          <div>
            <label>Address: </label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
            />
            <button onClick={() => handleUpdate("address", userData.address)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
          {!userData && <Link to="/user-form">Fill in details</Link>}
        </>
      )}
    </div>
  );
};

export default UserComponent;
