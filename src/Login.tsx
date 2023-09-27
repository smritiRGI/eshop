import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import styles from "./Login.module.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const myRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Focus on the element when the component mounts
    if (myRef.current) myRef.current.focus();
  }, []);

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.login}>
      <header className={styles.login__header}>
        <StorefrontOutlinedIcon
          className={styles.login__logoImage}
          fontSize="large"
          htmlColor="#ff9f00"
        />
        <h2 className={styles.login_Title}>eShop</h2>
      </header>
      <div className={styles.login__container}>
        <h2 className={styles.login_containerTitle}>Sign-In</h2>
        <div className={styles.login__form}>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.login__email}
            ref={myRef}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.login__password}
          />
          <button className="btn" type="submit" onClick={signIn}>
            Sign In
          </button>
        </div>
        <small>
          By signing-in you agree to the eShop Website
          <br />
          Conditions of Use & Sale. Please see our Privacy Notice,
          <br />
          our Cookies Notice and our Interest-Based Ads Notice.
        </small>

        <button className={styles.login__registerButton} onClick={register}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
};
export default Login;
