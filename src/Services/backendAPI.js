import { useContext } from "react";
import { AuthContext } from "../auth/Authcontext";
import ContextMarvel from "../Context/ContextMarvel";


const { setOnOff } = useContext(ContextMarvel);
const { setUser } = useContext(AuthContext);

export const verifyToken = async () => {
  const token = JSON.parse(localStorage.getItem('token')).token;
  console.log(token);

  const response = await fetch('https://marvelapp-dev-back.herokuapp.com/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  });
  const res = await response.json();
  if (res.message !== 'Login válido')
    console.log(res.message);
    setUser(false);
    setOnOff('off');
  return res;
}
