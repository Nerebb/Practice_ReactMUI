import React, { useState } from "react";
import { AuthContext } from "./GlobalContext";

function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
