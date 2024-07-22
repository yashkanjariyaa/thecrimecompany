import React, { createContext, useContext, useState } from "react";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<User>({ email: null }); // Initial user state

  const setUser: React.Dispatch<React.SetStateAction<User>> = (user) => {
    console.log("Setting user:", user);
    setUserState(user);
  };

  const logout = () => {
    setUser({ email: null });
  };

  const isLoggedIn = !!user.email && !!localStorage.getItem("token");
  console.log("from useUser", isLoggedIn);
  return (
    <UserContext.Provider value={{ user, setUser, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
