import { useState, useEffect } from "react";

interface UserEmail {
  email: string | null;
}

interface UserContextType {
  userEmail: UserEmail;
  setUser: (email: UserEmail) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const LOCAL_STORAGE_KEY = "userEmail";
const TOKEN_KEY = "token";

const getUserEmailFromLocalStorage = (): UserEmail => {
  const storedEmail = localStorage.getItem(LOCAL_STORAGE_KEY);
  return { email: storedEmail ? JSON.parse(storedEmail) : null };
};

const setUserEmailToLocalStorage = (email: string | null) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(email));
};

const useUser = (): UserContextType => {
  const [userEmail, setUserEmailState] = useState<UserEmail>(
    getUserEmailFromLocalStorage()
  );

  useEffect(() => {
    setUserEmailState(getUserEmailFromLocalStorage());
  }, []);

  const setUser = (email: UserEmail) => {
    setUserEmailState(email);
    setUserEmailToLocalStorage(email.email);
  };

  const logout = () => {
    setUser({ email: null });
    localStorage.removeItem(TOKEN_KEY);
  };

  const isLoggedIn = !!userEmail.email && !!localStorage.getItem(TOKEN_KEY);

  return { userEmail, setUser, logout, isLoggedIn };
};

export default useUser;
