import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext"; // Adjust import path as per your project structure
import { Link } from "react-router-dom";

const DisplayUserData = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<any>(null); // Use 'any' or replace with the actual type of userData
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Explicitly define error as string | null

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Making sure user.email is defined and not null
        if (user.email) {
          const response = await fetch(`/api/user-data?email=${user.email}`);
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
          const data = await response.json();
          setUserData(data);
        } else {
          // If user.email is null or undefined, set userData to null to indicate no data
          setUserData(null);
        }
      } catch (error: any) {
        // Using 'error: any' to handle unknown errors
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user.email]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : userData ? (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more data fields as needed */}
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
