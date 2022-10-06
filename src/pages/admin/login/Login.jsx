import {useState, useContext} from 'react';
import "./login.scss"
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from 'react-router-dom';
import { AuthModeContext } from '../../../context/AuthContext';

const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthModeContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch({type:"LOGIN", payload:user})
      navigate("/admin")
      // ...
    })
    .catch((error) => {
      setError(true)
    });
  }

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email"onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="mot de passe" onChange={ e => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        {error && <span>Mauvaise adresse ou mot de passe</span>}
      </form>
    </div>
  )
}

export default Login