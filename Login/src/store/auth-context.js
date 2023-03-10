import {createContext, useState, useEffect} from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn");
    if (isUserLoggedIn) setIsLoggedIn(true);
  }, []);

  function logoutHandler() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  function loginHandler() {
    localStorage.setItem("isLoggedIn", "true");

    setIsLoggedIn(true);
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
