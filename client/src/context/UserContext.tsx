// UserContext.js
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User, UserContextType} from "../constants/UserContextInterface";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

interface UserProviderProps{
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ email: null }); // Initial user state

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
