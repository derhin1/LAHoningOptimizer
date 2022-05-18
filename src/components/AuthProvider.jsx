import AuthContext from "../AuthContext";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [startingValue, setStartingValue] = useState(6);
  const [endValue, setEndValue] = useState(7);
  const [pieceCount, setPieceCount] = useState(1);
  return (
    <AuthContext.Provider
      value={{
        startingValue,
        setStartingValue,
        endValue,
        setEndValue,
        pieceCount,
        setPieceCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
