import { useContext } from "react";
import AuthContext from "../AuthContext";

const useAuth = () => {
  const {
    startingValue,
    setStartingValue,
    endValue,
    setEndValue,
    honingType,
    setHoningType,
  } = useContext(AuthContext);
  return {
    startingValue,
    setStartingValue,
    endValue,
    setEndValue,
    honingType,
    setHoningType,
  };
};

export default useAuth;
