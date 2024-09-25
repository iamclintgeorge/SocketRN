import { Children, createContext, useContext, useEffect } from "react";

export const authContext = createContext;
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(undefined);

  useEffect(() => {
    // onAuthStateChanged
  }, []);

  const login = async (email, password) => {
    try {
    } catch (e) {}
  };

  const logout = async (email, password) => {
    try {
    } catch (e) {}
  };

  const register = async (email, password) => {
    try {
    } catch (e) {}
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be wrapped inside AuthContextProvider");
  }

  return value;
};
