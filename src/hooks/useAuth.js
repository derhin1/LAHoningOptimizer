import { useContext } from "react";
import AuthContext from "../AuthContext";

const useAuth = () => {
  const { startingValue, setStartingValue, endValue, setEndValue } =
    useContext(AuthContext);
  return {
    startingValue,
    setStartingValue,
    endValue,
    setEndValue,
  };
};

export default useAuth;
