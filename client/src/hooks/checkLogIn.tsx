import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

export const useCheckLogin = () => {
  const { user } = useUser();
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Set isNotLoggedIn to true only if both token and email are null
    setIsNotLoggedIn(token === null && !user?.email);
  }, [user]);

  console.log(isNotLoggedIn);

  return isNotLoggedIn;
};
