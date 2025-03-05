import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import styles from '../styles/SignIn.module.css'

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.signIn}>Log In to Exclusive</h2>
      <form onSubmit={handleSignIn}>
        <p className={styles.text}>Enter your details below:</p>
        <input className={styles.email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.signInBtn} type="submit">Log In</button>
        <p className={styles.text2}>Don't have an account?</p>
        <li>
            <Link to='/sign-up'>Create an account</Link>
        </li>
      </form>
    </div>
  );
};
