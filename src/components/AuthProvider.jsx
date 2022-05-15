import AuthContext from "../AuthContext";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [startingValue, setStartingValue] = useState(6);
  const [endValue, setEndValue] = useState(7);
  const [honingType, setHoningType] = useState("armor");
  return (
    <AuthContext.Provider
      value={{
        startingValue,
        setStartingValue,
        endValue,
        setEndValue,
        honingType,
        setHoningType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
