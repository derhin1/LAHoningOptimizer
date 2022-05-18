import { useContext } from "react";
import AuthContext from "../AuthContext";

const useAuth = () => {
  const {
    startingValue,
    setStartingValue,
    endValue,
    setEndValue,
    pieceCount,
    setPieceCount,
  } = useContext(AuthContext);
  return {
    startingValue,
    setStartingValue,
    endValue,
    setEndValue,
    pieceCount,
    setPieceCount,
  };
};

export default useAuth;
