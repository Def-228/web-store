import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth";
import { useNavigate } from "react-router";
import styles from '../styles/SignUp.module.css'
import { app } from "../firebaseConfig";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();
  
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError("Пожалуйста, введите email и пароль.");
        return;
      }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing up: ", error.message);
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.signUp}>Create an account</h2>
      <form onSubmit={handleSignUp}>
        <p className={styles.text}>Enter your details below:</p>
        <input className={styles.email} type="email" placeholder="Email*" onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.password} type="password" placeholder="Password*" onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.signUpBtn} type="submit">Create Account</button>
      </form>
    </div>
  );
};
