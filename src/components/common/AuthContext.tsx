import { createContext, ReactNode, useContext, useState } from 'react';

interface UserContextType {
  userInfo: {};
  setUserInfo: React.Dispatch<React.SetStateAction<{}>>;
}

export const AuthContext = createContext<UserContextType | null>(null);

export const useUser = () => useContext(AuthContext);

interface UserProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>{children}</AuthContext.Provider>
  );
};