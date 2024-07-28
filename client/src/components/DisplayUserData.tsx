import { useState, useEffect } from "react";
import useUser from "../context/UserContext"; 
import { Link } from "react-router-dom";
import user from "../api/user";

const DisplayUserData = () => {
  const { userEmail } = useUser();
  const [userData, setUserData] = useState<any>(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userEmail.email) {
          const data = await user.getUserData(userEmail?.email || "");
          setUserData(data);
          setLoading(false);
        }
      } catch (error) {
        setError("Failed to fetch user data");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userEmail.email]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : userData ? (
        <div>
          <h2>User</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Mobile: {userData.mobile}</p>
          <p>Address: {userData.address}</p>
        </div>
      ) : (
        <div className="login-container">
          <p>User not logged in</p>
          <Link to="/auth">Sign up</Link>
        </div>
      )}
    </div>
  );
};

export default DisplayUserData;
